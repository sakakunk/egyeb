
package prtgy02;

/**
 *
 * @author baauaei
 */
public class ClassRectangleDemo {
    public static void main(String[] args){
        Rectangle r1 = new Rectangle(3,4,5,6);  //konstruktor hívása
        Rectangle r2 = new Rectangle(10, 8.5f, 12, 12.8f);
        Rectangle r3 = new Rectangle(10, 9, 8, 7);
        
        System.out.println(r1.perimeter());
        System.out.println(r2.perimeter());
        System.out.println(r1.area());
        System.out.println(r2.area());
        
        System.out.println(Rectangle.getCount());
    }
}
