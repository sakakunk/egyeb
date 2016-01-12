

package prtgy02;

/**
 *
 * @author baauaei
 */
public class Rectangle {
    private static int count =0;  //static az nem adattag, abból mindig 1 db van!
    private float x1; //this a konstruktorban
    private float x2;
    private float y1;
    private float y2;
    
    //konstruktor
    public Rectangle(float x1, float x2, float y1, float y2) {
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        ++count;
    }
    public static int getCount(){
        
       return count;
    }
    private float sideA(){
        return Math.abs(y1-x1);
    }
    private float sideB(){
        return Math.abs(y2-x2);
    }
    public float perimeter() {
        return (sideA() + sideB())*2;
    }
    public float area() {
        return sideA()*sideB();
    }
    public void translate(float coord1, float coord2) {
        x1=coord1;
        y1=coord2;
        x2=coord1;
        y2=coord2;
    }
}
