package prtgy08;

import java.awt.Point;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class MyFrame extends JFrame {

    private JTextField counterField;
    
    public MyFrame() {
        setTitle("A simple frame");
        setSize(400, 300);
        setLocationRelativeTo(null);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(null);
        add(panel);

        JButton button = new JButton("exit");
        button.setBounds(10, 10, 140, 20);
        button.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });
        panel.add(button);
        
        JButton upButton = new JButton("up");
        upButton.setBounds(10, 60, 140, 20);
        upButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                Point currentLocation = getLocation();
                setLocation(currentLocation.x, currentLocation.y-10);
            }
        });
        panel.add(upButton);
        
        counterField = new JTextField("0");
        counterField.setBounds(200, 10, 140, 20);
        panel.add(counterField);
        
        JButton increaseButton = new JButton("increase");
        increaseButton.setBounds(200, 60, 140, 20);
        increaseButton.addActionListener(new ActionListener() {

            @Override
            public void actionPerformed(ActionEvent e) {
                int number = Integer.parseInt(counterField.getText());
                counterField.setText(Integer.toString(number + 1));
            }
        });
        panel.add(increaseButton);
    }
}
