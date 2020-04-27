// exports.getScriptManifest = function() {
// 	return {
// 		name: "Script Name",
// 		description: "This script does something!",
// 		author: "Your name",
// 		version: "1.0"
// 	}
// }

exports.getDefaultParameters = function() {
    return new Promise(resolve => {
        resolve({
            SkillName: {
                type: "string",
                description: "Put $skillName here.",
            }
        });
    });
}

exports.run = function(runRequest) {
    return new Promise((resolve, reject) => {
        var skill = runRequest.parameters.SkillName
        var customEffects = {
            "Ember Shark": "https://xforgeassets001.xboxlive.com/serviceid-562a2165-bb5d-46f6-828c-2acdc8b22eb9/f92d6a17-d9ac-4a05-af9b-b2faa5e17bc4/797326_63701310338703.3.gif",
            "Smoking Dragon": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/018e12a8-1ec0-4b36-b747-78726986185b/ember-dragon.gif",
            "Paddle Boarding": "https://xforgeassets001.xboxlive.com/serviceid-562a2165-bb5d-46f6-828c-2acdc8b22eb9/5b7b82b5-b283-4dae-89f5-210867a3f95a/797326_63702561618610.5.gif",
            "Ember Train": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/9e3fc170-c6f3-4650-9e6d-33bb53fc8b17/ember-train_preview.gif",
            "Flaming Dragon": "https://xforgeassets001.xboxlive.com/xuid-2535473787585366-public/1f53a5d3-8ae7-498b-a01e-fad843ab3053/ember-dragon-fire.gif",
            "Flying Dragon": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/3b0c4a59-2929-489f-bb08-22d043714325/ember-dragon-fly.gif",
            "Rainbow Dumpster Fire": "https://xforgeassets001.xboxlive.com/xuid-2535473787585366-public/9a2f9863-60bd-4425-a311-2671b1abe01f/rainbow-dumpster-fire_x3_preview.gif",
            "Hot Air Balloons": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/e30a9c4c-e47e-4aa8-ae90-7feea8d45c7a/forza-balloons_preview_01.gif",
            "First Aid": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/968a3f0d-afc9-45e6-b6d3-fe515b14b08c/first-aid-parachute_preview.gif",
            "A Gif": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/d091649f-58bd-44a1-951c-d097d893ec2b/giphy_preview_256.gif",
            "Mermaid Corgi Swim": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/5f131550-e667-4738-ad1a-493bd2866ea8/mer-corgi_preview_256.gif",
            "Putting Out Fires": "https://xforgeassets001.xboxlive.com/serviceid-562a2165-bb5d-46f6-828c-2acdc8b22eb9-public/4dfae261-61ee-4c15-864d-3520300c3115/1555966082446.gif",
            "Flying Fairy": "https://xforgeassets001.xboxlive.com/serviceid-562a2165-bb5d-46f6-828c-2acdc8b22eb9/edb00de9-6c53-4743-9f58-8f212a1f0afe/797326_63697162686697.2.gif",
            "Spaghetti Monster": "https://xforgeassets002.xboxlive.com/xuid-2535473787585366-public/040a10cc-3e32-4688-9255-41469509baf9/flying-spaghetti-monster.gif"
        }
        var response = {
                success: true,
                errorMessage: "Failed to run the script!",
                effects: [
                    {
                        enterAnimation: "fadeIn",
                        exitAnimation: "fadeOut",
                        inbetweenAnimation: "none",
                        imageType: "url",
                        length: 8,
                        position: "Middle",
                        type: EffectType.SHOW_IMAGE,
                        url: customEffects[skill],
                        width: 500
                    }
                ]
            }
        // Resolve Promise with the response object
        resolve(response);
    });
}
