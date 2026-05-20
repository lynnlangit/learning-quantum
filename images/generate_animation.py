"""
Generate bit-vs-qubit animation (MP4) for the README.

Requires: matplotlib, numpy, pillow, ffmpeg (brew install ffmpeg)
Usage:   python3 images/generate_animation.py
Output:  images/bit-vs-qubit.mp4
"""

import numpy as np
import matplotlib.pyplot as plt
from matplotlib import animation
from mpl_toolkits.mplot3d import Axes3D

# -- Style constants (match existing image) --
NAVY = "#2C3E6B"
LIGHT_NAVY = "#7B8DB5"
WHITE = "#FFFFFF"
HIGHLIGHT = "#4A90D9"

FPS = 30
DURATION = 6  # seconds
FRAMES = FPS * DURATION


def draw_bloch_wireframe(ax):
    """Draw a static Bloch sphere wireframe."""
    # Sphere surface (very light, for depth cue)
    u = np.linspace(0, 2 * np.pi, 60)
    v = np.linspace(0, np.pi, 40)
    x = np.outer(np.cos(u), np.sin(v))
    y = np.outer(np.sin(u), np.sin(v))
    z = np.outer(np.ones_like(u), np.cos(v))
    ax.plot_surface(x, y, z, alpha=0.03, color=LIGHT_NAVY, linewidth=0)

    # Equator (dashed)
    theta = np.linspace(0, 2 * np.pi, 100)
    ax.plot(np.cos(theta), np.sin(theta), 0, color=NAVY, lw=1.2, ls="--", alpha=0.5)

    # Meridians (dashed)
    phi = np.linspace(0, np.pi, 100)
    ax.plot(np.cos(phi), np.zeros_like(phi), np.sin(phi) * (-1), color=NAVY, lw=0.8, ls="--", alpha=0.3)
    ax.plot(np.zeros_like(phi), np.cos(phi), np.sin(phi) * (-1), color=NAVY, lw=0.8, ls="--", alpha=0.3)

    # Axes
    ax.plot([0, 0], [0, 0], [-1.15, 1.15], color=NAVY, lw=1, alpha=0.4)
    ax.plot([-1.15, 1.15], [0, 0], [0, 0], color=NAVY, lw=1, alpha=0.4)
    ax.plot([0, 0], [-1.15, 1.15], [0, 0], color=NAVY, lw=1, alpha=0.4)

    # Poles
    ax.text(0, 0, 1.3, "|0\u27E9", ha="center", va="center", fontsize=13, fontweight="bold", color=NAVY)
    ax.text(0, 0, -1.35, "|1\u27E9", ha="center", va="center", fontsize=13, fontweight="bold", color=NAVY)


def setup_figure():
    """Create the figure with two side-by-side panels."""
    fig = plt.figure(figsize=(8, 4.5), facecolor=WHITE)

    # Left panel: BIT (2D)
    ax_bit = fig.add_axes([0.05, 0.05, 0.30, 0.78])
    ax_bit.set_xlim(-1.5, 1.5)
    ax_bit.set_ylim(-2.2, 2.2)
    ax_bit.set_aspect("equal")
    ax_bit.axis("off")
    ax_bit.set_title("BIT", fontsize=22, fontweight="bold", color=NAVY, pad=12)

    # Right panel: QUBIT (3D) — lowered with room for title
    ax_qubit = fig.add_axes([0.38, 0.02, 0.58, 0.85], projection="3d")
    ax_qubit.set_xlim([-1.4, 1.4])
    ax_qubit.set_ylim([-1.4, 1.4])
    ax_qubit.set_zlim([-1.4, 1.4])
    ax_qubit.axis("off")
    ax_qubit.view_init(elev=20, azim=-60)
    ax_qubit.set_title("QUBIT", fontsize=22, fontweight="bold", color=NAVY, pad=14)

    return fig, ax_bit, ax_qubit


def animate(frame, ax_bit, ax_qubit):
    """Update one frame of the animation."""
    ax_bit.clear()
    ax_bit.set_xlim(-1.5, 1.5)
    ax_bit.set_ylim(-2.2, 2.2)
    ax_bit.set_aspect("equal")
    ax_bit.axis("off")
    ax_bit.set_title("BIT", fontsize=22, fontweight="bold", color=NAVY, pad=12)

    # -- BIT side: toggle every 1 second --
    t = frame / FPS
    bit_val = int(t) % 2  # alternates 0, 1

    # Draw "0" circle (top)
    zero_color = NAVY if bit_val == 0 else LIGHT_NAVY
    zero_alpha = 1.0 if bit_val == 0 else 0.25
    circle0 = plt.Circle((0, 1.1), 0.55, fill=True, fc=zero_color, ec=NAVY, lw=2, alpha=zero_alpha)
    ax_bit.add_patch(circle0)
    ax_bit.text(0, 1.1, "0", ha="center", va="center", fontsize=22, fontweight="bold",
                color=WHITE if bit_val == 0 else LIGHT_NAVY)

    # Draw "1" circle (bottom)
    one_color = NAVY if bit_val == 1 else LIGHT_NAVY
    one_alpha = 1.0 if bit_val == 1 else 0.25
    circle1 = plt.Circle((0, -1.1), 0.55, fill=True, fc=one_color, ec=NAVY, lw=2, alpha=one_alpha)
    ax_bit.add_patch(circle1)
    ax_bit.text(0, -1.1, "1", ha="center", va="center", fontsize=22, fontweight="bold",
                color=WHITE if bit_val == 1 else LIGHT_NAVY)

    # -- QUBIT side: state vector tracing a path on the Bloch sphere --
    ax_qubit.clear()
    ax_qubit.set_xlim([-1.4, 1.4])
    ax_qubit.set_ylim([-1.4, 1.4])
    ax_qubit.set_zlim([-1.4, 1.4])
    ax_qubit.axis("off")
    ax_qubit.set_title("QUBIT", fontsize=22, fontweight="bold", color=NAVY, pad=14)
    ax_qubit.view_init(elev=20, azim=-60)

    draw_bloch_wireframe(ax_qubit)

    # State vector path: spiral from |0> down to |1> and back
    progress = (frame / FRAMES)  # 0 to 1 over full animation
    # theta goes 0 -> pi -> 0 (pole to pole and back)
    theta = np.pi * (0.5 - 0.5 * np.cos(2 * np.pi * progress))
    # phi rotates around the sphere
    phi = 4 * np.pi * progress

    sx = np.sin(theta) * np.cos(phi)
    sy = np.sin(theta) * np.sin(phi)
    sz = np.cos(theta)

    # Draw trail (recent path)
    trail_len = 40
    trail_frames = np.arange(max(0, frame - trail_len), frame + 1)
    trail_progress = trail_frames / FRAMES
    trail_theta = np.pi * (0.5 - 0.5 * np.cos(2 * np.pi * trail_progress))
    trail_phi = 4 * np.pi * trail_progress
    trail_x = np.sin(trail_theta) * np.cos(trail_phi)
    trail_y = np.sin(trail_theta) * np.sin(trail_phi)
    trail_z = np.cos(trail_theta)

    # Fade trail
    for i in range(len(trail_frames) - 1):
        alpha = 0.1 + 0.6 * (i / len(trail_frames))
        ax_qubit.plot(trail_x[i:i+2], trail_y[i:i+2], trail_z[i:i+2],
                      color=HIGHLIGHT, lw=2, alpha=alpha)

    # State vector arrow (from origin to point)
    ax_qubit.plot([0, sx], [0, sy], [0, sz], color=NAVY, lw=2.5, alpha=0.9)

    # Arrowhead (point on sphere)
    ax_qubit.scatter([sx], [sy], [sz], color=HIGHLIGHT, s=80, zorder=10, edgecolors=NAVY, linewidths=1.5)

    return []


def main():
    fig, ax_bit, ax_qubit = setup_figure()

    anim = animation.FuncAnimation(
        fig,
        animate,
        fargs=(ax_bit, ax_qubit),
        frames=FRAMES,
        interval=1000 / FPS,
        blit=False,
    )

    outpath = "images/bit-vs-qubit.mp4"
    writer = animation.FFMpegWriter(fps=FPS, bitrate=1800,
                                     extra_args=["-pix_fmt", "yuv420p"])
    anim.save(outpath, writer=writer, dpi=120)
    print(f"Saved: {outpath}")
    plt.close(fig)


if __name__ == "__main__":
    main()
