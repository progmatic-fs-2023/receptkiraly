// Dummy adatok a rankings táblához.

const mockRankings = {
  Visual: [
    {
      key: 1,
      img: 'http://placekitten.com/300/300',
      name: 'Pizza Margherita',
      description: 'Ízletes mozzarella sajttal és paradicsommal készült pizza.',
      score: 4.96,
      reviews: 372,
      rank: 1,
    },
    {
      key: 2,
      img: 'http://placekitten.com/300/300',
      name: 'Csokoládéfagyi',
      description: 'Krémes csokoládéfagyi, melyben a legfinomabb kakaó van felhasználva.',
      score: 4.9,
      reviews: 120,
      rank: 2,
    },
    {
      key: 3,
      img: 'http://placekitten.com/300/300',
      name: 'Sült csirke',
      description: 'Ropogósra sült csirkehús friss zöldségekkel és fűszerekkel.',
      score: 3.87,
      reviews: 223,
      rank: 3,
    },
  ],
  Taste: [
    {
      key: 1,
      img: 'http://placekitten.com/300/300',
      name: 'Gyümölcsös Csoda',
      description:
        'Friss gyümölcsökkel borított édes desszert, amely garantáltan feldobja a napodat.',
      score: 4.96,
      reviews: 372,
      rank: 1,
    },
    {
      key: 2,
      img: 'http://placekitten.com/300/300',
      name: 'Vanília Éden',
      description:
        'Lágy vaníliafagyi, melyet vaníliapálcikával és csokoládédarabokkal díszítünk. Egyszerű, mégis ínycsiklandó desszert.',
      score: 4.9,
      reviews: 120,
      rank: 2,
    },
    {
      key: 3,
      img: 'http://placekitten.com/300/300',
      name: 'Őszinte Tengeri Lakoma',
      description:
        'Friss tenger gyümölcseivel teli tányér, melyet fűszerekkel és citrommal készítünk el. Egy ízletes és egészséges választás.',
      score: 3.87,
      reviews: 223,
      rank: 3,
    },
  ],
  Cooked: [
    {
      key: 1,
      img: 'http://placekitten.com/300/300',
      name: 'Csípős Jalapeño Burger',
      description:
        'Tűzforró jalapeñóval és fűszeres szószokkal készült hamburger. Csípős élvezet minden harapásnál.',
      score: 4.2,
      reviews: 142,
      rank: 1,
    },
    {
      key: 2,
      img: 'http://placekitten.com/300/300',
      name: 'Áfonyás Csoda',
      description:
        'Friss áfonyával és vaníliakrémmel töltött sütemény. Ideális választás délutáni teához.',
      score: 3.8,
      reviews: 165,
      rank: 2,
    },
    {
      key: 3,
      img: 'http://placekitten.com/300/300',
      name: 'Vegetáriánus Élvezet',
      description:
        'Zöldségekkel és friss fűszerekkel gazdagított vegetáriánus tál. Egészséges és finom egyben.',
      score: 4.5,
      reviews: 120,
      rank: 3,
    },
  ],
  Battle_wins: [
    {
      key: 1,
      img: 'http://placekitten.com/300/300',
      name: 'Görög Saláta',
      description:
        'Friss görög saláta olívabogyóval, feta sajttal és pikáns öntettel. Az egészséges étkezés egyik klasszikusa.',
      score: 4.1,
      reviews: 188,
      rank: 1,
    },
    {
      key: 2,
      img: 'http://placekitten.com/300/300',
      name: 'Karamellás Espresso',
      description:
        'Intenzív karamell ízzel és frissen őrölt kávéval készült espresso. Az ébrenlét pillanatai.',
      score: 4.8,
      reviews: 210,
      rank: 2,
    },
    {
      key: 3,
      img: 'http://placekitten.com/300/300',
      name: 'Szaftos BBQ Csirke',
      description:
        'Szaftos BBQ szószba mártott csirkemell friss salátával és burgonya körettel. Egy ízletes grillezett étel.',
      score: 3.6,
      reviews: 155,
      rank: 3,
    },
    {
      key: 4,
      img: 'http://placekitten.com/300/300',
      name: 'Friss Tavaszi Saláta',
      description:
        'Szezonális zöldségekből és friss zöldfűszerekből készült tavaszi saláta. Frissítő és könnyű.',
      score: 4.4,
      reviews: 178,
      rank: 4,
    },
  ],
  Overall: [
    {
      key: 1,
      img: 'http://placekitten.com/300/300',
      name: 'Gyümölcsös Smoothie',
      description: 'Friss gyümölcsök turmixolva, a tökéletes reggeli vagy délutáni frissítő ital.',
      score: 3.5,
      reviews: 132,
      rank: 1,
    },
    {
      key: 2,
      img: 'http://placekitten.com/300/300',
      name: 'Csokoládéban Fürdő Brownie',
      description:
        'Sűrű csokoládébrownie, csokiszósszal és vaníliafagyival. A csokoládéimádók paradicsoma.',
      score: 4.6,
      reviews: 195,
      rank: 2,
    },
    {
      key: 3,
      img: 'http://placekitten.com/300/300',
      name: 'Mediterrán Pita Szendvics',
      description:
        'Friss mediterrán zöldségek és fűszerek pita kenyérbe csomagolva. Egyszerű, mégis ízletes szendvics.',
      score: 4.3,
      reviews: 145,
      rank: 3,
    },
  ],
};

export default mockRankings;
