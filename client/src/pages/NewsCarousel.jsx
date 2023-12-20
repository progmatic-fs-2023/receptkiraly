/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import NewsItem from '../components/NewsItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NewsFeed() {
  const newsArray = [
    {
      id: 1,
      title: 'A butcher’s dispatch from the festive front lines',
      headline:
        'It’s the season of huge queues, stupid questions and (hopefully) new loyal customers',
      columnName: 'FT Magazine',
      createDate: '2023-12-16',
      authorName: '',
      authorImage: '',
      fullText:
        'Have you heard the one about the butcher who had no turkeys at Christmas? It happened to me last year. It was all going smoothly, orders piling up. I’d heard rumblings of problems for turkey farmers down south, but my shop is in Newcastle. A lot of things happen down south that don’t touch us. Then it happened. A phone call from our turkey farmer to tell me he’d had to cull all his livestock due to an outbreak of avian flu. It was devastating for him and his business. For me, being honest, it was a professional embarrassment and an administrative nightmare. There was an outside chance I could have honoured half of the orders from another supplier, but there was no way I was making the call as to who among my customers was deserving of a turkey and who was not. Is it the new mum who told me she wants to start family life with the perfect Christmas, or the flash hipsters who’ve just started coming into my shop and who I’d like to keep as punters? Rather than wield the knife myself, I rang every customer and told them to take their chances with the other butchers or even the supermarkets. Visiting the butcher’s just at Christmas can be a gamble — and not just because we’re sometimes more vulnerable to these supply-chain disasters. You queue in the cold only to be greeted by a gruff bloke who already knows that he may only see you once every 12 months. But have pity on us. Winter is already the busiest time of the year, and at Christmas the demands on our time and patience multiply, ranging from the far too big (“I’ve ordered one turkey, but now I’m here I’d like two”) to the infuriatingly small (“Just calling to ask if you can change my order from 30 chipolatas to 31?”). Most of us start work between 2.30am and 4.30am (I’m on the early end of that). Come 3pm, your request that I write down every single instruction for how to cook the gammon I’m selling you probably is “too much bother”.',
    },
    {
      id: 2,
      title: 'Kolae, London: ‘Every single dish, I was thinking “God, yes!”’ — review',
      headline:
        'It’s OK to be a few-trick pony when the tricks are as good as at this Thai restaurant from Som Saa',
      columnName: 'ReviewFT Magazine',
      createDate: '2023-12-14',
      authorName: '',
      authorImage: '',
      fullText:
        'Let’s start with the prawn heads. I’m sure there are people who don’t even realise they have heads, who think they’re born as delicate, pale grubs on a bed of iceberg with a pile-ointment-pink dressing. Others peel their prawns prissily, discarding everything crunchy. Some squeeze the heads or suck them for the pungent gloop inside, but it takes some kind of insane bravery to deep-fry them, bodiless, with turmeric and garlic and serve them to paying customers. Bravery and genius. I’m not sure quite what authorities are involved in these things, but if they ever taste these prawn heads, they’ll ban them in a hot second for being corruptingly joyous. Don’t get me wrong. Prawns are a challenge. They lacerate your gums and no one’s going to snog you for a fortnight, but that won’t stop you once you get going. And this is just the first item on the menu at Kolae. Kolae is a new Thai restaurant in Borough Market from Andy Oliver and Mark Dobbie, the presiding genii of Som Saa, and it’s incredibly good. Not just in the sense of “Oooh, that’s tasty” but more like “Jesus. This has just reminded me why I eat.” Do you remember the first time you had Thai food in the UK? Thai was — I’m not sure what to call it really. A fresh wave in the food revolution? We were used to “Indian” and “Chinese”. There was a vague idea that raw fish could be a thing. But it was the sudden surge of tiny Thai restaurants and Thai menus in pubs that shook us awake. C’mon, I know there wasn’t an ounce of authenticity in some of the traffic-light curries (“red, yellow or green?”) slung over the counter in the saloon bar of The Old Stabbed Rat. But it was what we needed. Don’t you remember the first time you tasted nam pla and felt the pulsing surge of gastronomic adventure? That’s exactly what Kolae is doing all over again. And I can’t work out how. Genuinely. Every single dish, I was thinking “God, yes! This is exciting and different, and it’s glorious.” There was, for example, another slightly more elegant starter next to the prawn wreckage. Rice crackers with chicken, chilli jam and peanut salad. Not your normal rice crackers, not the chilli jam you’re used to and some very fresh peanuts. I find it difficult to type that without actually dribbling into my Mac. The name Kolae is that of the restaurant’s signature technique. Anything on the menu called “kolae” they marinate in a coconut- and spice-laden liquid, then they lay it on a grill, brown it a little, re-dip and repeat. It’s a little like one of the techniques of the Yakitori cook, but this stuff is the texture of thick paint and builds layers of intensity. Heat, sourness . . . is “pungence” even a word? They “kolae” mussel skewers. Also, a hefty chicken skewer, or a hogget chop, which is then taken off the bone and served with more of the gloop poured over and around it. I guess you could argue that several dishes on a menu with the same flavouring is restricting if you don’t like the flavour. You’ll like the flavour. “Phuket style” soy-braised Middlewhite belly doesn’t feature The Marinade but actually goes one better. It reminds you it is, in point of fact, possible to improve on the jellied opulence of pig fat provided you braise it in a spiced sauce for so long that it all but sublimates. I didn’t know whether to eat it or just poke at it in wonder. In the end, the only appropriate response was to rinse myself in its fragrance while praying. The pepper curry of grilled venison, apple aubergine and sadtor beans jolts the senses like being woken at 4am by a sadistic drill instructor. It’s hot as hell and gives all the sense organs in the front of your face a thorough and comprehensive seeing-to. It also manages to make both venison and little round aubergines interesting again after many years in the wilderness. I was tempted by the cooling looking slaw-like-thing they brought to the next table and gestured at it. It looked so fresh, with its threads of roasted coconut and strips of sour mango. So much so that I didn’t notice the dozens of tiny dried fish lurking in the pile. If I had, I might have given it the swerve and never known the brilliance I’d missed. It did, indeed, cool the fires, but it also expanded the mind. I had the kale-and-herb fritters with fermented chilli and cashew nuts to introduce an antiscorbutic element to the meal; it was a wise decision. The leather leaves, beaten into compliance in the fryer, delivered chilli so good that, in a single mouthful, it caused me to forgive and forget every appalling crime of fermentation perpetrated in Hackney over the past decade. If, like me, you’ve been suckered into any kind of carb avoidance, it’s worth allowing yourself to be persuaded by the waiter to try some “new season” rice. After the sensory kicking of the rest of the menu, it promised a moment of bland calm. But even here, there is more to be discovered, principally perfumes of surpassing delicacy. So for dessert I wrapped up with more rice, this time scented with pandan and topped with a coconut sorbet. I love the set-up at Kolae. Once you’re inside and up the back stairs, there’s a warren of tiny private dining nooks for all manner of discreet jiggery-pokery. I’m going back next week, taking a small private room and I’m going to do something absolutely filthy with that dessert.',
    },
    {
      id: 3,
      title: 'Keralan mussels ishtu with rice noodles — a Ravinder Bhogal recipe',
      headline: 'A stew that brings warmth and calm to wintry nights',
      columnName: 'Life',
      createDate: '2023-12-12',
      authorName: '',
      authorImage: '',
      fullText:
        'Kerala has the velvety, botanical beauty of a Henri Rousseau painting. For centuries, it has lured traders: Romans, Phoenicians, Portuguese, Jews, Arabs, French, Dutch, English all found their way there, bringing their own unique culinary traditions that have left an indelible influence on the cuisine. The Portuguese introduced cashews and chillies, the Jews kept kosher but embraced the freshness of coriander and curry leaves, and the Syrian Christians introduced roasted meats and seafood stews. The collision of these influences with aromatic native spices and coconut has resulted in a light, nuanced and varied cuisine that is markedly different from the hefty cooking of north India. A few years ago, I cruised through the languid backwaters of Alappuzha on a rattan houseboat. Throughout the day, our captain, who also served as cook, brought in trays of icy drinks to accompany spectacular meals and snacks that were prepared in the tiny galley; stir-fries of seasonal vegetables tossed with grated coconut, stews made with coconut milk, steamed plantains seasoned with black pepper, fish in banana leaves marinated with a rugged chilli and coconut paste, and banana chips fried in coconut oil. Coconut was a delicious running theme, its flesh, oil, milk, and vinegar are indispensable in the south Indian kitchen. My favourite, ishtu, comes from Kerala’s Syrian Christian community. It can be made with vegetables, chicken or fish and is traditionally served with appams, fermented bowl-shaped pancakes. I serve it ladled over noodles so it can be slurped from a bowl, which isn’t traditional but on dank wintry days it transports me to sunnier climes.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-96 h-48 bg-orange-50 m-10 p-1 px-2 relative border-2 rounded-lg border-gray-200 border-opacity-50">
      <Slider {...settings}>
        {newsArray.map((newsItem) => (
          <NewsItem
            key={newsItem.id}
            id={newsItem.id}
            columnName={newsItem.columnName}
            title={newsItem.title}
            headline={newsItem.headline}
          />
        ))}
      </Slider>
    </div>
  );
}
export default NewsFeed;
