/// <reference types="node" />
import Rect from "./shape/Rect";
import Polygon from "./shape/Polygon";
import Dot from "./shape/Dot";
import EventBus from "./EventBus";
import Line from "./shape/Line";
import Circle from "./shape/Circle";
import Shape from "./shape/Shape";
import Connectivity from "./shape/Connectivity";
import fabric from "fabric/fabric-impl";
type Point = [number, number];
export interface Point2 {
    x: number;
    y: number;
}
type AllShape = Rect | Polygon | Dot | Line | Circle | Connectivity;
export default class CanvasSelect extends EventBus {
    version: string;
    lock: boolean;
    MIN_WIDTH: number;
    MIN_HEIGHT: number;
    MIN_RADIUS: number;
    strokeStyle: string;
    fillStyle: string;
    activeStrokeStyle: string;
    activeFillStyle: string;
    ctrlStrokeStyle: string;
    ctrlFillStyle: string;
    ctrlRadius: number;
    hideLabel: boolean;
    labelFillStyle: string;
    labelFont: string;
    textFillStyle: string;
    labelMaxLen: number;
    WIDTH: number;
    HEIGHT: number;
    canvas: fabric.Canvas;
    canvasParentNode: HTMLElement;
    dataset: Array<AllShape>;
    offScreen: fabric.Canvas;
    remmber: number[][];
    mouse: Point;
    remmberOrigin: number[];
    createType: number;
    ctrlIndex: number;
    cursor: string;
    image: HTMLImageElement;
    IMAGE_ORIGIN_WIDTH: number;
    IMAGE_WIDTH: number;
    IMAGE_ORIGIN_HEIGHT: number;
    IMAGE_HEIGHT: number;
    originX: number;
    originY: number;
    scaleStep: number;
    scrollZoom: boolean;
    timer: NodeJS.Timer;
    dblTouch: number;
    dblTouchStore: number;
    alpha: boolean;
    focusMode: boolean;
    evt: MouseEvent | TouchEvent | KeyboardEvent;
    scaleTouchStore: number;
    isTouch2: boolean;
    isDragging: boolean;
    dragStartX: number;
    dragStartY: number;
    allowPanning: boolean;
    RemoveSelectionOnKey: string;
    rectangleConnectivity: Point[];
    parentRectangleConnectivity: Shape;
    childRectangleConnectivity: Shape;
    keyRectangleConnectivity: Shape;
    valueRectangleConnectivity: Shape;
    hideAnnotateLabels: boolean;
    LineWidth: number;
    ZoomLevel: number;
    ScrollTop: number;
    scrollStartX: number;
    scrollStartY: number;
    rightClickMoveEvent: any;
    /**
     * @param el Valid CSS selector string, or DOM
     * @param src image src
     */
    constructor(el: HTMLCanvasElement | string, src?: string);
    set setDragging(value: boolean);
    set setRightClickMoveEvent(value: boolean);
    get activeShape(): any;
    get scale(): number;
    get imageMin(): number;
    get imageOriginMax(): number;
    /**
     * 合成事件
     * @param e
     * @returns
     */
    mergeEvent(e: TouchEvent | MouseEvent): {
        mouseX: number;
        mouseY: number;
        mouseCX: number;
        mouseCY: number;
        isMobile: boolean;
        altKey: boolean;
        button: number;
        buttons: number;
        clientX: number;
        clientY: number;
        ctrlKey: boolean;
        metaKey: boolean;
        movementX: number;
        movementY: number;
        offsetX: number;
        offsetY: number;
        pageX: number;
        pageY: number;
        relatedTarget: EventTarget;
        screenX: number;
        screenY: number;
        shiftKey: boolean;
        x: number;
        y: number;
        getModifierState(keyArg: string): boolean;
        initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget): void;
        detail: number;
        view: Window;
        which: number;
        initUIEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: Window, detailArg?: number): void;
        bubbles: boolean;
        cancelBubble: boolean;
        cancelable: boolean;
        composed: boolean;
        currentTarget: EventTarget;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        returnValue: boolean;
        srcElement: EventTarget;
        target: EventTarget;
        timeStamp: number;
        type: string;
        composedPath(): EventTarget[];
        initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
        preventDefault(): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        AT_TARGET: number;
        BUBBLING_PHASE: number;
        CAPTURING_PHASE: number;
        NONE: number;
    } | {
        mouseX: number;
        mouseY: number;
        mouseCX: number;
        mouseCY: number;
        isMobile: boolean;
        altKey: boolean;
        changedTouches: TouchList;
        ctrlKey: boolean;
        metaKey: boolean;
        shiftKey: boolean;
        targetTouches: TouchList;
        touches: TouchList;
        detail: number;
        view: Window;
        which: number;
        initUIEvent(typeArg: string, bubblesArg?: boolean, cancelableArg?: boolean, viewArg?: Window, detailArg?: number): void;
        bubbles: boolean;
        cancelBubble: boolean;
        cancelable: boolean;
        composed: boolean;
        currentTarget: EventTarget;
        defaultPrevented: boolean;
        eventPhase: number;
        isTrusted: boolean;
        returnValue: boolean;
        srcElement: EventTarget;
        target: EventTarget;
        timeStamp: number;
        type: string;
        composedPath(): EventTarget[];
        initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void;
        preventDefault(): void;
        stopImmediatePropagation(): void;
        stopPropagation(): void;
        AT_TARGET: number;
        BUBBLING_PHASE: number;
        CAPTURING_PHASE: number;
        NONE: number;
    };
    handleLoad(): void;
    /**
    Handles the "leave" event triggered by a user action.
    @param {Event} e - The event object associated with the "leave" event.
    */
    handelLeave(e: any): void;
    handleScroll(e: any): void;
    handleContextmenu(e: MouseEvent): void;
    /**
     * Handles the mousewheel event and performs zooming functionality.
     * @param e The WheelEvent object representing the mousewheel event.
     * @returns void
     */
    handleMousewheel(e: WheelEvent): void;
    handleMouseDown(e: MouseEvent | TouchEvent): void;
    handelMouseMove(e: MouseEvent | TouchEvent): void;
    handelMouseUp(e: MouseEvent | TouchEvent): void;
    handelDblclick(e: MouseEvent | TouchEvent): void;
    handelKeyup(e: KeyboardEvent): void;
    private keyValueConnectivity;
    /**
     * Find reactangle for connectivity between the rectangle
     */
    private findReactengle;
    /**
    Creates connectivity between rectangles in a graphical application.
    The method is specific to the context of an object or class it belongs to.
    */
    private createConnectivity;
    /**
  
    Checks if a given array is contained within another array, considering specific element comparisons.
    @param {any[]} parentArr - The parent array to be checked.
    @param {any[]} childArr - The child array to be checked.
    @param {any[]} comp - The array to be compared for existence within the parent and child arrays.
    @returns {boolean} Returns true if the comp array is found within either the parent or child arrays, false otherwise.
    */
    private isArrayInArray;
    private getDomRect;
    private drawShortestLine;
    private getClosestMidpoints;
    private getMidpoints;
    private getDistance;
    /**
     * 初始化配置
     */
    initSetting(): void;
    /**
     * 初始化事件
     */
    initEvents(): void;
    /**
     * 添加/切换图片
     * @param url 图片链接
     */
    setImage(url: string): void;
    /**
     * 设置数据
     * @param data Array
     */
    setData(data: AllShape[]): void;
    /**
     * 判断是否在标注实例上
     * @param mousePoint 点击位置
     * @returns
     */
    hitOnShape(mousePoint: Point): [number, AllShape];
    /**
     * 判断鼠标是否在背景图内部
     * @param e MouseEvent
     * @returns 布尔值
     */
    isInBackground(e: MouseEvent | TouchEvent): boolean;
    /**
     * 判断是否在矩形内
     * @param point 坐标
     * @param coor 区域坐标
     * @returns 布尔值
     */
    isPointInRect(point: Point, coor: Point[]): boolean;
    /**
     * 判断是否在多边形内
     * @param point 坐标
     * @param coor 区域坐标
     * @returns 布尔值
     */
    isPointInPolygon(point: Point, coor: Point[]): boolean;
    /**
     * 判断是否在圆内
     * @param point 坐标
     * @param center 圆心
     * @param r 半径
     * @param needScale 是否为圆形点击检测
     * @returns 布尔值
     */
    isPointInCircle(point: Point, center: Point, r: number): boolean;
    /**
     * 判断是否在折线内
     * @param point 坐标
     * @param coor 区域坐标
     * @returns 布尔值
     */
    isPointInLine(point: Point, coor: Point[]): boolean;
    /**
  
  Checks if a given point lies on a line segment defined by two points.
  @param {number} x - The x-coordinate of the point to be checked.
  @param {number} y - The y-coordinate of the point to be checked.
  @param {number} x1 - The x-coordinate of the first point defining the line segment.
  @param {number} y1 - The y-coordinate of the first point defining the line segment.
  @param {number} x2 - The x-coordinate of the second point defining the line segment.
  @param {number} y2 - The y-coordinate of the second point defining the line segment.
  @returns {boolean} Returns true if the point lies on the line segment, false otherwise.
  */
    isPointOnLine(x: any, y: any, x1: any, y1: any, x2: any, y2: any): boolean;
    /**
  
  Determines if a given circle intersects with a line segment defined by two points.
  @param {number} x1 - The x-coordinate of the first point defining the line segment.
  @param {number} y1 - The y-coordinate of the first point defining the line segment.
  @param {number} x2 - The x-coordinate of the second point defining the line segment.
  @param {number} y2 - The y-coordinate of the second point defining the line segment.
  @param {number} cx - The x-coordinate of the center of the circle.
  @param {number} cy - The y-coordinate of the center of the circle.
  @param {number} r - The radius of the circle.
  @returns {boolean} Returns true if the circle intersects with the line segment, false otherwise.
  */
    circleLineIntersect(x1: number, y1: number, x2: number, y2: number, cx: number, cy: number, r: number): boolean;
    /**
     * 绘制矩形
     * @param shape 标注实例
     * @returns
     */
    drawRect(shape: Rect): void;
    /**
     * 绘制多边形
     * @param shape 标注实例
     */
    drawPolygon(shape: Polygon): void;
    /**
     * 绘制点
     * @param shape 标注实例
     */
    drawDot(shape: Dot): void;
    /**
     * 绘制圆
     * @param shape 标注实例
     */
    drawCirle(shape: Circle): void;
    /**
     * 绘制折线
     * @param shape 标注实例
     */
    drawLine(shape: Line | Connectivity): void;
    /**
     * 绘制控制点
     * @param point 坐标
     */
    drawCtrl(point: Point): void;
    /**
     * 绘制控制点列表
     * @param shape 标注实例
     */
    drawCtrlList(shape: Rect | Polygon | Line | Connectivity): void;
    /**
     * 绘制label
     * @param point 位置
     * @param label 文本
     */
    drawLabel(point: Point, shape: AllShape): void;
    /**
     * 更新画布
     */
    update(): void;
    /**
     * 删除指定矩形
     * @param index number
     */
    deleteByIndex(index: number): void;
    /**
     * 计算缩放步长
     */
    calcStep(flag?: string): void;
    /**
     * 缩放
     * @param type true放大5%，false缩小5%
     * @param center 缩放中心 center|mouse
     * @param pure 不绘制
     */
    setScaleOld(type: boolean, byMouse?: boolean, pure?: boolean): void;
    setScale(type: boolean, byMouse?: boolean, pure?: boolean): void;
    /**
     * 适配背景图
     */
    fitZoom(): void;
    /**
     * 设置专注模式
     * @param type {boolean}
     */
    setFocusMode(type: boolean): void;
    /**
     * 销毁
     */
    destroy(): void;
    /**
     * 重新设置画布大小
     */
    resize(): void;
}
export {};
