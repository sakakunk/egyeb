/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * definiáljunk 2 teglalapot, bal felsö és jobb alsó csucspontookal. kiirni: ker, ter.
 */

package prtgy02;

/**
 *
 * @author baauaei
 */
public class SimpleRectangleDemo {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // teglalap 1
        float x1=2f;
        float y1=3f;
        float x2=6f;
        float y2=4f;
        // teglalap 2
        float x1a=3f;
        float y1a=5f;
        float x2a=2f;
        float y2a=0f;
        // teglalap 1 ker, ter
        float ker1=2*(Math.abs(x1-x2)+Math.abs(y1-y2));
        System.out.println(ker1);
        float ter1=Math.abs(x1-x2)*Math.abs(y1-y2);
        System.out.println(ter1);
        // teglalap 2 ker, ter
        float ker2=2*(Math.abs(x1a-x2a)+Math.abs(y1a-y2a));
        System.out.println(ker2);
        float ter2=Math.abs(x1-x2)*Math.abs(y1-y2);
        System.out.println(ter2);
    }
    
}
