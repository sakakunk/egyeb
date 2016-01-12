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
public class Ora4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        House h1 = new House(2f);
        h1.addRoom(10f, 10f );
        h1.addRoom (1f, 2f);
        System.out.println(h1.area());
        System.out.println(h1.heatingBill(-5));
        House h2 = new InsulatedHouse(3f, 1f);
    }
    
}
