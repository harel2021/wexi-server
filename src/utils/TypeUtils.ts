
export class TypeUtils {

    /**
     * Gets property name from interface safely with type checking.
     * @param name - name of the property
     */
    public static propertyOf<T>(name: keyof T) {
        return name
    }
}