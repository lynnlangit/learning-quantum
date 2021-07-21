var spike_position = 8;
var data_range = 16;
var num_spikes = estimate_num_spikes(spike_position, data_range);

function estimate_num_spikes(spike, range)
{
    if (spike < range / 2)
        spike = range - spike;
    var best_error = 1.0;
    var e0 = 0;
    var e1 = 0;
    var e2 = 0;
    var actual = spike / range;
    var candidates = [];
    for (denom = 1.0; denom < spike; ++denom)
    {
        var numerator = Math.round(denom * actual);
        var estimated = numerator / denom;
        var error = Math.abs(estimated - actual);
        e0 = e1;
        e1 = e2;
        e2 = error;
        
        // Look for a local minimum which beats our current best error
        if (e1 <= best_error && e1 < e0 && e1 < e2)
        {
            var repeat_period = denom - 1;
            candidates.push(denom - 1);
            best_error = e1;
        }
    }
    return candidates;
}

//qc.print('Estimated number of spikes: ' + num_spikes + '\n');
console.log('Estimated number of spikes: ' + num_spikes + '\n');
