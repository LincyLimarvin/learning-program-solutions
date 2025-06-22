package documents;

public class WordFactory extends DocumentFactory {

	@Override
	public Document createDocument() {
		return new WordDocument();
	}

}
