import { PositionType } from "../../types/PositionType";


class OrderLogic {


    // Radius range of searching in KMs
    private static SEARCH_RADIUS: number = 15;

    /**
     * Gets closes orders to given position
     * @param position - Position object for searching nearby orders
     */
    public static getCloseOrders(position: PositionType) {

    }

    /**
     * Gets circle center position and order position and check if order's position is inside the given circle
     * @param circlePosition - circle center 
     * @param position - given position object for searching if it inside the given circle
     */
    private static isInside(circlePosition: PositionType, position: PositionType): boolean {
        // Compare radius of circle with distance of its center from given point 
        if ((position.x - circlePosition.x) * (position.x - circlePosition.x) +
            (position.y - circlePosition.y) * (position.y - circlePosition.y) <= Math.pow(OrderLogic.SEARCH_RADIUS, 2))
            return true;
        else
            return false;
    }
}