1. Napraviti 2 komponente: Change font size i Product
2. Change Font Size:
	- 2 buttona Increase i Decrease font size, povećavaju tj smanjuju određeni property iz typescript-a. Vrednost tog propertyja se prikazuje ispod button-a
	- U p tagu ("Neki tekst") pozvati direktivu "clicking", koja prihvata 2 argumenta clicking i fontSize
	- Ukoliko je za clicking prosleđeno true, klikom na tekst se fontSize elementa setuje u skladu sa podatkom koji se nalazi u komponenti
	- Ukoliko je za clicking svojstvo prosleđeno false, klikom na tekst se ne dešava ništa

3. Products:
	- Prikazati dati niz u formi tabele koristeći ngFor
	products = [
      		{ "Name": "Cheese", "Price" : 2.50, "Location": "Refrigerated foods", "Type": "C"},
      		{ "Name": "Crisps", "Price" : 3, "Location": "the Snack isle", "Type": "M"},
      		{ "Name": "Pizza", "Price" : 4, "Location": "Refrigerated foods", "Type": "?"},
      		{ "Name": "Chocolate", "Price" : 1.50, "Location": "the Snack isle", "Type": "C"},
      		{ "Name": "Caviar", "Price" : 45.50, "Location": "Refrigerated foods", "Type": "E"},
      		{ "Name": "Self-raising flour", "Price" : 1.50, "Location": "Home baking", "Type": "C"},
      		{ "Name": "Ground almonds", "Price" : 3, "Location": "Home baking", "Type": "M"}
    	]
	- Koristeći index u svakoj iteraciji, promeniti pozadinsku boju parnim elementima
	- Koristeći ngSwitch za svojstvo Type (kolona Price Desc):
		- Ukoliko je vrednost C prikazati Cheap
		- Ukoliko je vrednost M prikazati Medium
		- Ukoliko je vrednost E prikazati Expensive
		- U ostalim situacijama prikazati Other


https://user-images.githubusercontent.com/38792171/166316050-9f8b635c-a5ea-4000-9574-17b61a7cb7bd.mp4


