/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package ora4;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author baauaei
 */
public class House {
    private final float wallThickness;
    private final List<Room> rooms = new ArrayList<>();
    public House(float wallThickness) {
        this.wallThickness=wallThickness;
    }
    public void addRoom(float a, float b) {
        Room r1=new Room(a, b);
        rooms.add(r1);
    }
    public float area() {
        float area=0;
       // for(int i=0;i<rooms.size();++i) {
            for(Room room : rooms) {
            //area+=rooms.get(i).area();
                area+=room.area();
        }
        return area;
    }
    public int heatingBill(int temperature) {
       return Math.round(Math.max(0, 25-temperature*area()-wallThickness));
    }
}

