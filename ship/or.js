AFRAME.registerComponent("ocean-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }    
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  
  AFRAME.registerComponent("ship-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      this.data.speedOfRotation=this.el.getAttribute("rotation")
  
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation.x < 10) {
            this.data.speedOfRotation.x += 0.5;
            this.el.setAttribute("rotation",this.data.speedOfRotation)
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation.x > -10) {
            this.data.speedOfRotation.x -= 0.5;
            this.el.setAttribute("rotation",this.data.speedOfRotation)
          }
        }

        if (e.key === "ArrowDown") {
          
        }

        if (e.key === "ArrowUp") {
            
          }
      });
    }
  })