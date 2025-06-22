package financialForecast;

public class Main {
	
	 public static double forecastValue(double initialValue, double rate, int years) {
	        if (years == 0) {
	            return initialValue; 
	        }
	        return forecastValue(initialValue * (1 + rate), rate, years - 1); 
	    }

	public static void main(String[] args) {
		
		double initial = 10000;     
        double growthRate = 0.10;   
        int forecastYears = 5;     

        double futureValue = forecastValue(initial, growthRate, forecastYears);
        System.out.printf("Forecasted value after %d years: ₹%.2f\n", forecastYears, futureValue);
	}

}
