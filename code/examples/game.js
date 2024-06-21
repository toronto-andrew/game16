var GAME_LEVELS = [`                                                    
    ................................................................................
    `];
  
    var levelChars = {
        ".": "empty"
        /*, "#": "wall", "+": "lava",
        "@": Player, "o": Coin,
        "=": Lava, "|": Lava, "v": Lava*/
      };


    var Level = class Level {
        constructor(plan) {
          let rows = plan.trim().split("\n").map(l => [...l]);
          this.height = rows.length;
          this.width = rows[0].length;
          this.startActors = [];
      
          this.rows = rows.map((row, y) => {
            return row.map((ch, x) => {
              let type = levelChars[ch];
              if (typeof type != "string") {
                let pos = new Vec(x, y);
                this.startActors.push(type.create(pos, ch));
                type = "empty";
              }
              console.log(type);
              return type;
            });
          });
        }
      }


    function runLevel(level, Display) {
        console.log("runLevel Started");
        //let display = new Display(document.body, level);
        let display = new Display(null, level);
        //let state = State.start(level);
        let ending = 1;
        return new Promise(resolve => {
            setTimeout(() => {
                resolve("Data fetched");
            }, 2000);
          /*runAnimation(time => {
            state = state.update(time, arrowKeys);
            display.syncState(state);
            if (state.status == "playing") {
              return true;
            } else if (ending > 0) {
              ending -= time;
              return true;
            } else {
              display.clear();
              resolve(state.status);
              return false;
            }
          });*/
        });
        console.log("runLevel End");
      }

async function runGame(plans, Display) {
    
    for (let level = 0; level < plans.length;) {
      let status = await runLevel(new Level(plans[level]),
                                  Display);
      if (status == "won") level++;
    }
    console.log("You've won!");
  }

  var DOMDisplay = class DOMDisplay {
    constructor(parent, level) {
        console.log("DOMDisplay created");
        /*
      this.dom = elt("div", {class: "game"}, drawGrid(level));
      this.actorLayer = null;
      parent.appendChild(this.dom);*/
    }
  
    //clear() { this.dom.remove(); }
  }

  runGame(GAME_LEVELS, DOMDisplay);