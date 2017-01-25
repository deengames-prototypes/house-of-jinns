Crafty.c("Room", {
    // Create a room precisely contained within this size
    create: function(x, y, width, height) {
        var wallThickness = parseInt(config("wall_thickness"));
        this.top = Crafty.e("WallWithDoorway").create(x, y, width, wallThickness);
        this.bottom = Crafty.e("WallWithDoorway").create(x, y + height - wallThickness, width, wallThickness);
        this.left = Crafty.e("WallWithDoorway").create(x, y, wallThickness, height);
        this.right = Crafty.e("WallWithDoorway").create(x + width - wallThickness, y, wallThickness, height);
        return this;
    },

    seal: function(directions) {
        if (directions.indexOf("n") >= 0) {
            this.top.wall();
        }
        if (directions.indexOf("w") >= 0) {
            this.left.wall();
        }
        if (directions.indexOf("s") >= 0) {
            this.bottom.wall();
        }
        if (directions.indexOf("e") >= 0) {
            this.right.wall();
        }
        return this;
    },

    door: function(directions) {
        if (directions.indexOf("n") >= 0) {
            var door = this.top.door();
            door.move(door.x, door.y - DOOR_WIDTH / 2);
        }
        if (directions.indexOf("w") >= 0) {
            var door = this.left.door();
            door.move(door.x - DOOR_WIDTH / 2, door.y);
        }
        if (directions.indexOf("s") >= 0) {
            var door = this.bottom.door();
             door.move(door.x, door.y + DOOR_WIDTH / 2);
        }
        if (directions.indexOf("e") >= 0) {
            var door = this.right.door();
            door.move(door.x + DOOR_WIDTH / 2, door.y);
        }
        return this;
    }
});