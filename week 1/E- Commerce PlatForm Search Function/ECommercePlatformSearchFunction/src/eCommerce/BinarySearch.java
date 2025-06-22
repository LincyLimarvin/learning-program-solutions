package eCommerce;

import java.util.Arrays;
import java.util.Comparator;

public class BinarySearch {

	 public static int search(Product[] products, String productName) {
	        Arrays.sort(products, Comparator.comparing(Product::getProductName));
	        
	        int low = 0;
	        int high = products.length - 1;

	        while (low <= high) {
	            int mid = (low + high) / 2;
	            String midName = products[mid].getProductName();

	            int result = productName.compareToIgnoreCase(midName);
	            if (result == 0)
	                return mid;
	            else if (result < 0)
	                high = mid - 1;
	            else
	                low = mid + 1;
	        }

	        return -1;
	    }
	 
}
