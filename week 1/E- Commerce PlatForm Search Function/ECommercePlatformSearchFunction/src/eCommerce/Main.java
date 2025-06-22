package eCommerce;

public class Main {

	public static void main(String[] args) {
		
		Product[] products = {
	            new Product(101, "iPhone", "Electronics"),
	            new Product(102, "T-Shirt", "Clothing"),
	            new Product(103, "Coffee Maker", "Home"),
	            new Product(104, "Laptop", "Electronics"),
	            new Product(105, "Notebook", "Stationery")
	        };

	        int index1 = LinearSearch.search(products, "Laptop");
	        System.out.println("Linear Search: Found at index " + index1);
	        
	        int index2 = BinarySearch.search(products, "Laptop");
	        System.out.println("Binary Search: Found at index " + index2);

	}

}
