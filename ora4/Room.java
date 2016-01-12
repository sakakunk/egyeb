/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ora4;

/**
 *
 * @author baauaei
 */
public class Room {
    private final float a;
    private final float b;
    
    public Room(float a, float b) {
        this.a=a;
        this.b=b;
    }
    public float area() {
        return a*b;
    }
}
