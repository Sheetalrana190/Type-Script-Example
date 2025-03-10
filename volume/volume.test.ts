//goal: Calculate the volume of prisim
// Vollume = width * length * hight

//30 = 2  * 3 * 5
//volume is 30 when width = 2, length =3 and hight =5

import { calculateVolumeOfaPrism } from './volume';

test("calculate the volume of a prisim", () => {
    const width = 2;
    const length = 3;
    const hight = 5;

    const volume = calculateVolumeOfaPrism(width, length, hight);

    expect(volume).toBe(width*length*hight)
});