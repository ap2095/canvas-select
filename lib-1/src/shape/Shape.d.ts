interface ShapeProp {
    type: number;
    [key: string]: any;
}
export default class Shape {
    label: string;
    hideLabel: boolean;
    coor: any[];
    rectangleConnectivity: any;
    lineCoorIndex: any[];
    strokeStyle: string;
    fillStyle: string;
    labelFillStyle: string;
    textFillStyle: string;
    labelFont: string;
    type: number;
    active: boolean;
    creating: boolean;
    dragging: boolean;
    index: number;
    uuid: string;
    data: any;
    previousCoor: any[];
    constructor(item: ShapeProp, index: number);
}
export {};
