/**
* @license StewartPrivateLicense-2.0.0
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

// THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH

// Update Checker start
let i = document.createElement('iframe');
document.body.append(i);
window.confirm = i.contentWindow.confirm.bind(window);
i.remove();
if (1673301837266 > (await Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://dashboard.blooket.com/api/games?gameId=6368436a976422d8a3f70cd7").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/global/getDailyRewards.js")?.answers?.[0]}`))) || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
// Update Checker end
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    if (!location.href.includes("play.blooket.com")) alert("This cheat only works on play.blooket.com");
    else {
        var axios = Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']],]).cache).find((x) => x.exports?.a?.get).exports.a;
        axios.get("https://dashboard.blooket.com/api/users").then(({ data: { name } }) => {
            axios.get("https://play.blooket.com/api/users/bonuses").then(({ data: { tokensAvailable: addedTokens, xpAvailable: addedXp } }) => {
                axios.put("https://play.blooket.com/api/users/add-rewards", { name, addedTokens, addedXp })
                    .then(() => alert(`Added ${addedTokens} tokens and ${addedXp} xp!`))
                    .catch(() => alert('There was an error when adding rewards.'));
            }).catch(() => alert("There was an error getting bonus data."));
        }).catch(() => alert('There was an error user data.'));
    }
}