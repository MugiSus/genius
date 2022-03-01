class Element {
    constructor(name, symbol, number, weight, group, period) {
        this.name = name;
        this.symbol = symbol;
        this.number = number;
        this.weight = weight;
        this.group = group;
        this.period = period;
    }
}

class ElementsTable {
    constructor(...elements) {
        this.elements = elements;
    }

    findSymbol(symbol) {
        return this.elements.find(element => element.symbol.toLowerCase() == symbol.toLowerCase());
    }
}

const Elements = new ElementsTable(
    new Element("Hydrogen", "H", 1, 1.00794, 1, 1),
    new Element("Helium", "He", 2, 4.002602, 18, 1),
    new Element("Lithium", "Li", 3, 6.941, 1, 2),
    new Element("Beryllium", "Be", 4, 9.012182, 2, 2),
    new Element("Boron", "B", 5, 10.811, 13, 2),
    new Element("Carbon", "C", 6, 12.0107, 14, 2),
    new Element("Nitrogen", "N", 7, 14.0067, 15, 2),
    new Element("Oxygen", "O", 8, 15.9994, 16, 2),
    new Element("Fluorine", "F", 9, 18.9984032, 17, 2),
    new Element("Neon", "Ne", 10, 20.1797, 18, 2),
    new Element("Sodium", "Na", 11, 22.98976928, 1, 3),
    new Element("Magnesium", "Mg", 12, 24.3050, 2, 3),
    new Element("Aluminium", "Al", 13, 26.9815386, 13, 3),
    new Element("Silicon", "Si", 14, 28.0855, 14, 3),
    new Element("Phosphorus", "P", 15, 30.973762, 15, 3),
    new Element("Sulfur", "S", 16, 32.065, 16, 3),
    new Element("Chlorine", "Cl", 17, 35.453, 17, 3),
    new Element("Argon", "Ar", 18, 39.948, 18, 3),
    new Element("Potassium", "K", 19, 39.0983, 1, 4),
    new Element("Calcium", "Ca", 20, 40.078, 2, 4),
    new Element("Scandium", "Sc", 21, 44.955912, 3, 4),
    new Element("Titanium", "Ti", 22, 47.867, 4, 4),
    new Element("Vanadium", "V", 23, 50.9415, 5, 4),
    new Element("Chromium", "Cr", 24, 51.9961, 6, 4),
    new Element("Manganese", "Mn", 25, 54.938045, 7, 4),
    new Element("Iron", "Fe", 26, 55.845, 8, 4),
    new Element("Cobalt", "Co", 27, 58.933195, 9, 4),
    new Element("Nickel", "Ni", 28, 58.6934, 10, 4),
    new Element("Copper", "Cu", 29, 63.546, 11, 4),
    new Element("Zinc", "Zn", 30, 65.38, 12, 4),
    new Element("Gallium", "Ga", 31, 69.723, 13, 4),
    new Element("Germanium", "Ge", 32, 72.64, 14, 4),
    new Element("Arsenic", "As", 33, 74.92160, 15, 4),
    new Element("Selenium", "Se", 34, 78.96, 16, 4),
    new Element("Bromine", "Br", 35, 79.904, 17, 4),
    new Element("Krypton", "Kr", 36, 83.798, 18, 4),
    new Element("Rubidium", "Rb", 37, 85.4678, 1, 5),
    new Element("Strontium", "Sr", 38, 87.62, 2, 5),
    new Element("Yttrium", "Y", 39, 88.90585, 3, 5),
    new Element("Zirconium", "Zr", 40, 91.224, 4, 5),
    new Element("Niobium", "Nb", 41, 92.90638, 5, 5),
    new Element("Molybdenum", "Mo", 42, 95.96, 6, 5),
    new Element("Technetium", "Tc", 43, 98, 7, 5),
    new Element("Ruthenium", "Ru", 44, 101.07, 8, 5),
    new Element("Rhodium", "Rh", 45, 102.9055, 9, 5),
    new Element("Palladium", "Pd", 46, 106.42, 10, 5),
    new Element("Silver", "Ag", 47, 107.8682, 11, 5),
    new Element("Cadmium", "Cd", 48, 112.411, 12, 5),
    new Element("Indium", "In", 49, 114.818, 13, 5),
    new Element("Tin", "Sn", 50, 118.710, 14, 5),
    new Element("Antimony", "Sb", 51, 121.760, 15, 5),
    new Element("Tellurium", "Te", 52, 127.60, 16, 5),
    new Element("Iodine", "I", 53, 126.90447, 17, 5),
    new Element("Xenon", "Xe", 54, 131.293, 18, 5),
    new Element("Caesium", "Cs", 55, 132.9054519, 1, 6),
    new Element("Barium", "Ba", 56, 137.327, 2, 6),
    new Element("Lanthanum", "La", 57, 138.90547, 3, 6),
    new Element("Cerium", "Ce", 58, 140.116, 4, 6),
    new Element("Praseodymium", "Pr", 59, 140.90765, 5, 6),
    new Element("Neodymium", "Nd", 60, 144.242, 6, 6),
    new Element("Promethium", "Pm", 61, 145, 7, 6),
    new Element("Samarium", "Sm", 62, 150.36, 8, 6),
    new Element("Europium", "Eu", 63, 151.964, 9, 6),
    new Element("Gadolinium", "Gd", 64, 157.25, 10, 6),
    new Element("Terbium", "Tb", 65, 158.92535, 11, 6),
    new Element("Dysprosium", "Dy", 66, 162.500, 12, 6),
    new Element("Holmium", "Ho", 67, 164.93032, 13, 6),
    new Element("Erbium", "Er", 68, 167.259, 14, 6),
    new Element("Thulium", "Tm", 69, 168.93421, 15, 6),
    new Element("Ytterbium", "Yb", 70, 173.054, 16, 6),
    new Element("Lutetium", "Lu", 71, 174.9668, 17, 6),
    new Element("Hafnium", "Hf", 72, 178.49, 4, 7),
    new Element("Tantalum", "Ta", 73, 180.94788, 5, 7),
    new Element("Tungsten", "W", 74, 183.84, 6, 7),
    new Element("Rhenium", "Re", 75, 186.207, 7, 7),
    new Element("Osmium", "Os", 76, 190.23, 8, 7),
    new Element("Iridium", "Ir", 77, 192.217, 9, 7),
    new Element("Platinum", "Pt", 78, 195.084, 10, 7),
    new Element("Gold", "Au", 79, 196.966569, 11, 7),
    new Element("Mercury", "Hg", 80, 200.59, 12, 7),
    new Element("Thallium", "Tl", 81, 204.3833, 13, 7),
    new Element("Lead", "Pb", 82, 207.2, 14, 7),
    new Element("Bismuth", "Bi", 83, 208.98040, 15, 7),
    new Element("Polonium", "Po", 84, 209, 16, 7),
    new Element("Astatine", "At", 85, 210, 17, 7),
    new Element("Radon", "Rn", 86, 222, 18, 7),
    new Element("Francium", "Fr", 87, 223, 1, 8),
    new Element("Radium", "Ra", 88, 226, 2, 8),
    new Element("Actinium", "Ac", 89, 227, 3, 8),
    new Element("Thorium", "Th", 90, 232.03806, 4, 8),
    new Element("Protactinium", "Pa", 91, 231.03588, 5, 8),
    new Element("Uranium", "U", 92, 238.02891, 6, 8),
    new Element("Neptunium", "Np", 93, 237, 7, 8),
    new Element("Plutonium", "Pu", 94, 244, 8, 8),
    new Element("Americium", "Am", 95, 243, 9, 8),
    new Element("Curium", "Cm", 96, 247, 10, 8),
    new Element("Berkelium", "Bk", 97, 247, 11, 8),
    new Element("Californium", "Cf", 98, 251, 12, 8),
    new Element("Einsteinium", "Es", 99, 252, 13, 8),
    new Element("Fermium", "Fm", 100, 257, 14, 8),
    new Element("Mendelevium", "Md", 101, 258, 15, 8),
    new Element("Nobelium", "No", 102, 259, 16, 8),
    new Element("Lawrencium", "Lr", 103, 262, 17, 8),
    new Element("Rutherfordium", "Rf", 104, 261, 4, 9),
    new Element("Dubnium", "Db", 105, 262, 5, 9),
    new Element("Seaborgium", "Sg", 106, 266, 6, 9),
    new Element("Bohrium", "Bh", 107, 264, 7, 9),
    new Element("Hassium", "Hs", 108, 277, 8, 9),
    new Element("Meitnerium", "Mt", 109, 268, 9, 9),
    new Element("Darmstadtium", "Ds", 110, 281, 10, 9),
    new Element("Roentgenium", "Rg", 111, 272, 11, 9),
    new Element("Copernicium", "Cn", 112, 285, 12, 9),
    new Element("Nihonium", "Nh", 113, 284, 13, 9),
    new Element("Flerovium", "Fl", 114, 289, 14, 9),
    new Element("Moscovium", "Mc", 115, 288, 15, 9),
    new Element("Livermorium", "Lv", 116, 293, 16, 9),
    new Element("Tennessine", "Ts", 117, 294, 17, 9),
    new Element("Oganesson", "Og", 118, 294, 18, 9),
)

