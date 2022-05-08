import java.util.*;
import java.util.Random;

class encrypt{
    int num;
    
    encrypt(){
        num = (int)Math.floor(Math.random()*(1000-10+1)+10);        
    }
    
    String breakThe(String str){
        
        String eny = "";
        
        str.toCharArray();
        for (int i = 0; i < str.length(); i++) {
            char val = (char)((int)str.charAt(i) + num);
            eny += val;
        }
        return eny;
    }
    String rev(String str){
        
        String eny = "";
        // System.out.println(num);
        str.toCharArray();
        for (int i = 0; i < str.length(); i++) {
            char val = (char)((int)str.charAt(i) - num);
            eny += val;
        }
        return eny;
    }

}

public class YES{
    public static void main(String args[]){
        Scanner s = new Scanner(System.in);
        
        System.out.print("Enter the string :: ");
        String str = s.nextLine();
        
        encrypt e = new encrypt();
        
        String str1 = e.breakThe(str);
        System.out.println("Encrypted :: "+str1);
        
        String str2 = e.rev(str1);
        System.out.println("Decrypted :: "+str2);

}
}