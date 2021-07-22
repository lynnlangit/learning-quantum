var spike_position = 8;         // start 8, try 4, 7, 10
var data_range = 16;            // start 16, try 10, 100, 160
var num_spikes = estimate_num_spikes(spike_position, data_range);

function estimate_num_spikes(spike, range)
{
    if (spike < range / 2)
        spike = range - spike;
    var best_error = 1.0;
    var e0 = 0, e1 = 0, e2 = 0;
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
console.log('Estimated number of spikes: ' + num_spikes + ' for range: ' + data_range + '\n');


// from the book...
// This example returns two candidate results (4 and 8) AFTER we READ
    // Check both to see whether they provide prime factors of 15
    // Use the method ShorLogic()...
        // implements the gcd equations that determine prime factors 
        // from a given number of DFT spikes (example 12-1)
        // Try the value 4 --> it returns the (factors) 3 and 5

    // WARNING
        // Not all of the available values will lead to a correct answer 
            // What happens if we receive the value 0? 
            // This is 25% likely, and in this case the estimate_num_spikes() function 
            // returns no candidate values at all, so the program fails
            // This is a common situation with quantum algorithms
                // Check the validity of our answer quickly, if incorrect
                // Re-run the program again, from the beginning