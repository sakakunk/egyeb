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
public class InsulatedHouse extends House {
    
    private final float insulation;
    
    public InsulatedHouse(float wallThickness, float insulation) {
        super(wallThickness); // ösosztaly konstruktoranak meghivasa
        this.insulation=insulation;
    }
    
    @Override
    public int heatingBill(int temperature) {
        return Math.round(Math.max(0, super.heatingBill(temperature)-insulation) );
    }
}
