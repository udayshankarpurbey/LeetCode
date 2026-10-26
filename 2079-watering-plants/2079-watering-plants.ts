function wateringPlants(plants: number[], capacity: number): number {
    let step = 0;
    let water = capacity;

    for (let i = 0; i < plants.length; i++) {
        if (plants[i] > capacity) return step;


        // return to fill water 
        if (plants[i] > water) {
            water = capacity;
            step = step + i + i;
        }

        water -= plants[i];
        step++;
    }


    return step;
};