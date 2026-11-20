// [prefecture(ja), name(ja), description(ja), name(en), description(en)]
const FOODS = [
[
"北海道",
"ジンギスカン",
"羊肉を専用の鍋で焼いて食べる北海道を代表する焼き肉料理",
"Jingisukan (Genghis Khan)",
"Lamb grilled on a domed pan, Hokkaido's signature grilled meat dish"
],
[
"北海道",
"釧路のそば",
"釧路地域で親しまれてきたそば",
"Kushiro Soba",
"Soba noodles enjoyed in the Kushiro area"
],
[
"北海道",
"なよろ煮込みジンギスカン",
"名寄産の羊肉を野菜と煮込む鍋仕立てのジンギスカン",
"Nayoro Simmered Jingisukan",
"Nayoro lamb simmered with vegetables in a hot-pot style"
],
[
"北海道",
"石狩鍋",
"鮭と野菜を味噌仕立てで煮込む石狩地方発祥の鍋料理",
"Ishikari Nabe",
"Salmon and vegetable hot pot in miso broth from the Ishikari region"
],
[
"北海道",
"豚丼",
"甘辛いタレで焼いた豚肉をご飯にのせた丼",
"Butadon",
"Rice bowl topped with pork grilled in a sweet-savory sauce"
],
[
"北海道",
"ガタタン",
"具だくさんでとろみのある中華風スープ",
"Gatatan",
"Hearty Chinese-style thick soup packed with ingredients"
],
[
"北海道",
"スパカツ",
"スパゲッティにカツをのせミートソースをかけた料理",
"Supakatsu",
"Spaghetti topped with a cutlet and meat sauce"
],
[
"北海道",
"室蘭やきとり",
"豚肉と玉ねぎを串に刺し洋からしを添えて食べる焼き鳥",
"Muroran Yakitori",
"Skewers of pork and onion served with hot mustard"
],
[
"北海道",
"札幌スープカレー",
"スパイスの効いたさらさらのスープに大きな具材を入れたカレー",
"Sapporo Soup Curry",
"Spicy, soupy curry with large chunks of vegetables and meat"
],
[
"北海道",
"新子焼き",
"タレをつけて焼いた若鶏の半身焼き",
"Shinko-yaki",
"Half a young chicken grilled with sauce"
],
[
"北海道",
"小樽あんかけ焼そば",
"揚げ麺や焼き麺に海鮮や野菜のあんをかけた料理",
"Otaru Ankake Yakisoba",
"Fried noodles topped with a thick seafood-and-vegetable sauce"
],
[
"北海道",
"とまこまいカレーラーメン",
"カレー味のスープでいただく苫小牧のご当地ラーメン",
"Tomakomai Curry Ramen",
"Ramen served in a curry-flavored broth from Tomakomai"
],
[
"北海道",
"ひる貝カレー",
"ひる貝を具に使ったご当地カレー",
"Hirugai Curry",
"Local curry featuring hirugai shellfish"
],
[
"北海道",
"とまこまいホッキカレー",
"苫小牧産のホッキ貝を使ったカレー",
"Tomakomai Hokki Curry",
"Curry made with surf clams from Tomakomai"
],
[
"北海道",
"あげいも",
"じゃがいもを揚げた素朴な北海道のおやつ",
"Age-imo",
"A simple Hokkaido snack of deep-fried potatoes"
],
[
"青森県",
"清水森ナンバ一升漬",
"青唐辛子・麹・醤油を漬け込んだ辛味のある調味料",
"Shimizumori Nanba Isshozuke",
"Spicy seasoning of green chili, koji and soy sauce pickled together"
],
[
"青森県",
"八戸せんべい汁",
"南部せんべいを入れた醤油味の汁物",
"Hachinohe Senbei-jiru",
"Soy-sauce-based soup with Nanbu rice crackers"
],
[
"青森県",
"十和田バラ焼き",
"牛バラ肉と玉ねぎを甘辛いタレで焼いた料理",
"Towada Barayaki",
"Beef short rib and onion grilled in a sweet-savory sauce"
],
[
"青森県",
"黒石つゆやきそば",
"焼きそばをつゆに入れて食べる黒石のご当地麺料理",
"Kuroishi Tsuyu Yakisoba",
"Yakisoba served in soup, a Kuroishi specialty"
],
[
"岩手県",
"一関・平泉の伝統的なもち食文化",
"行事やお祝いごとで多彩な味付けの餅を食べる地域の食文化",
"Traditional Mochi Cuisine of Ichinoseki and Hiraizumi",
"Regional food culture of enjoying varied mochi dishes at festivals and celebrations"
],
[
"岩手県",
"わんこそば",
"一口ずつ給仕されるそばをお椀で食べ進める郷土の食べ方",
"Wanko Soba",
"Soba served in small portions, one bowl at a time, until you stop"
],
[
"岩手県",
"まめぶ",
"くるみと黒糖入りの小麦粉団子を入れた汁物",
"Mamebu",
"Soup with wheat dumplings containing walnuts and brown sugar"
],
[
"岩手県",
"じゅうね餅",
"えごま（じゅうね）をまぶした餅",
"Jūne Mochi",
"Rice cake coated in egoma (perilla seed) paste"
],
[
"岩手県",
"南部鼻曲がり鮭の新巻鮭",
"南部の鮭を塩漬けにして保存性を高めた新巻鮭",
"Nanbu Hanamagari Salmon Aramaki",
"Nanbu-area salmon salt-cured for preservation"
],
[
"岩手県",
"盛岡三大麺",
"わんこそば・盛岡じゃじゃ麺・盛岡冷麺の三つの麺料理",
"Morioka Three Great Noodles",
"Wanko soba, Morioka jajamen and Morioka reimen"
],
[
"岩手県",
"遠野ジンギスカン",
"遠野で親しまれる羊肉の焼き肉",
"Tono Jingisukan",
"Grilled lamb popular in Tono"
],
[
"岩手県",
"としるの貝がら焼き",
"貝殻を器にして具材を焼く郷土料理",
"Toshiru no Kaigara-yaki",
"Regional dish cooked in a shell used as a pot"
],
[
"岩手県",
"べご汁",
"地域に伝わる郷土の汁物",
"Begoshiru",
"Traditional local soup"
],
[
"宮城県",
"はらこめし",
"鮭の煮汁で炊いたご飯にいくらと鮭をのせた料理",
"Harako-meshi",
"Rice cooked in salmon broth, topped with salmon and ikura"
],
[
"宮城県",
"石巻焼きそば",
"二度蒸しした茶色い麺を使い目玉焼きをのせる焼きそば",
"Ishinomaki Yakisoba",
"Yakisoba with twice-steamed brown noodles topped with a fried egg"
],
[
"宮城県",
"けの汁",
"野菜や山菜などを細かく刻んで煮た味噌仕立ての汁物",
"Kenojiru",
"Miso-based soup with finely chopped vegetables and wild plants"
],
[
"宮城県",
"牛たん焼き",
"牛タンを焼き麦飯やテールスープと合わせる仙台の名物",
"Gyutan-yaki",
"Grilled beef tongue, Sendai's specialty, served with barley rice"
],
[
"宮城県",
"ほや雑煮",
"ほやで出汁をとった雑煮",
"Hoya Zoni",
"Ozoni (New Year soup) with broth made from sea squirt"
],
[
"宮城県",
"おぼろ汁",
"地域に伝わる郷土の汁物",
"Oboro-jiru",
"Traditional local soup"
],
[
"宮城県",
"白石温麺",
"油を使わずに作る短めの麺",
"Shiroishi Umen",
"Short wheat noodles made without oil"
],
[
"宮城県",
"はっと",
"小麦粉の生地を薄くのばして汁に入れる郷土料理",
"Hatto",
"Thinly stretched wheat dough cooked in soup"
],
[
"宮城県",
"えび餅",
"えびを使った郷土の餅",
"Ebi Mochi",
"Local mochi made with shrimp"
],
[
"秋田県",
"きりたんぽ",
"つぶしたご飯を杉の棒に巻いて焼いたもの。鍋にも使う",
"Kiritanpo",
"Mashed rice wrapped around cedar sticks and grilled; also used in hot pot"
],
[
"秋田県",
"ジャンボうさぎ料理",
"大型種のジャンボうさぎの肉を使った料理",
"Jumbo Rabbit Cuisine",
"Dishes made from the meat of the large Jumbo rabbit breed"
],
[
"秋田県",
"秋田かやき",
"貝殻を鍋代わりにして具材を煮る郷土料理",
"Akita Kayaki",
"Hot-pot style dish cooked in a shell"
],
[
"秋田県",
"白餅",
"秋田で祝いの席などに食べられる餅",
"Shiro Mochi",
"White rice cake eaten at celebrations in Akita"
],
[
"秋田県",
"秋田の佃煮",
"魚介や山菜などを甘辛く煮た保存食",
"Akita Tsukudani",
"Seafood or wild plants simmered in sweet-savory sauce as a preserved food"
],
[
"秋田県",
"横手やきそば",
"目玉焼きと福神漬けをのせる横手のご当地焼きそば",
"Yokote Yakisoba",
"Yakisoba topped with a fried egg and pickles, a Yokote specialty"
],
[
"秋田県",
"西馬音内そば",
"つなぎに布海苔を使う羽後町のそば",
"Nishimonai Soba",
"Soba from Ugo made with funori seaweed as a binder"
],
[
"秋田県",
"こさかまちかつらーめん",
"ラーメンにカツをのせた小坂町のご当地麺",
"Kosaka-machi Katsu Ramen",
"Ramen topped with a cutlet, local to Kosaka Town"
],
[
"秋田県",
"いぶりがっこ",
"燻した大根を漬けた漬物",
"Iburi Gakko",
"Smoked daikon pickles"
],
[
"秋田県",
"鹿角ホルモン",
"鹿角地域の甘辛いタレのホルモン焼き",
"Kazuno Horumon",
"Kazuno-style offal grilled in sweet-savory sauce"
],
[
"山形県",
"笹巻",
"もち米を笹の葉で包んで煮た保存性のある食べ物",
"Sasamaki",
"Preserved rice cake wrapped in bamboo leaves and boiled"
],
[
"山形県",
"冷たい肉そば",
"鶏の出汁の冷たいつゆでいただくそば",
"Cold Meat Soba",
"Soba in a chilled chicken broth"
],
[
"山形県",
"酒田のラーメン",
"あっさりした醤油味の酒田のラーメン",
"Sakata Ramen",
"Light soy-sauce ramen from Sakata"
],
[
"山形県",
"むきそば",
"殻をむいたそばの実を使った郷土料理",
"Mukisoba",
"Local dish made with hulled buckwheat groats"
],
[
"山形県",
"蔵王温泉ジンギスカン",
"蔵王温泉で親しまれる羊肉の焼き肉",
"Zao Onsen Jingisukan",
"Grilled lamb popular at Zao hot springs"
],
[
"山形県",
"山形芋煮",
"里芋と肉・野菜を煮込む鍋料理",
"Yamagata Imoni",
"Taro and meat stew pot"
],
[
"山形県",
"むくり鮒",
"鮒を使った郷土料理",
"Mukuri Funa",
"Local dish made with crucian carp"
],
[
"福島県",
"いもずいも",
"郷土に伝わる芋を使った料理",
"Imozuimo",
"Traditional local dish made with taro"
],
[
"福島県",
"喜多方ラーメン",
"平打ちの縮れ麺と醤油スープが特徴のご当地ラーメン",
"Kitakata Ramen",
"Local ramen with flat curly noodles in soy-sauce broth"
],
[
"福島県",
"円盤餃子",
"円形に並べて焼く福島市の餃子",
"Enban Gyoza",
"Gyoza arranged in a circle on the pan, from Fukushima City"
],
[
"福島県",
"こづゆ",
"貝柱の出汁で野菜や麩などを煮た会津のお祝いの汁物",
"Kozuyu",
"Aizu celebration soup simmered with scallop broth and vegetables"
],
[
"福島県",
"ラジウム玉子",
"温泉の熱を利用して作る玉子",
"Radium Tamago",
"Eggs cooked using hot spring heat"
],
[
"福島県",
"クリームボックス",
"クリームを使った福島県のパン菓子",
"Cream Box",
"Cream-filled bakery sweet from Fukushima"
],
[
"福島県",
"ベンケイ",
"福島県に伝わる郷土の食べ物",
"Benkei",
"Traditional Fukushima local food"
],
[
"福島県",
"郡山ブラック",
"黒い醤油スープのご当地ラーメン",
"Koriyama Black",
"Ramen with a dark soy-sauce broth"
],
[
"福島県",
"あんこうのどぶ汁",
"あんこうを丸ごと使う濃厚な汁物",
"Ankō no Dobujiru",
"Rich soup using whole monkfish"
],
[
"福島県",
"いかにんじん",
"細切りのするめいかと人参を醤油などに漬けた料理",
"Ika Ninjin",
"Shredded dried squid and carrot pickled in soy sauce"
],
[
"福島県",
"サンマのポーポー焼き・サンマのみりん干し",
"サンマを使った焼き物とみりん干し",
"Sanma Pōpō-yaki and Sanma Mirin-boshi",
"Grilled Pacific saury dish and mirin-dried saury"
],
[
"福島県",
"山都そば",
"喜多方市山都地区のそば",
"Yamato Soba",
"Soba from the Yamato district of Kitakata"
],
[
"福島県",
"メヒカリの唐揚げ",
"深海魚メヒカリを揚げた料理",
"Mehikari Karaage",
"Deep-fried mehikari (greeneye), a deep-sea fish"
],
[
"福島県",
"うにの貝焼",
"ウニを貝殻にのせて蒸し焼きにした料理",
"Uni no Kaiyaki",
"Sea urchin steamed on a shell"
],
[
"福島県",
"塩川鳥モツ",
"喜多方市塩川地区で親しまれる鳥モツ料理",
"Shiokawa Tori Motsu",
"Chicken offal from the Shiokawa district of Kitakata"
],
[
"福島県",
"高田梅漬け",
"会津美里町の高田梅を使った漬物",
"Takada Umezuke",
"Pickled ume from Takada plums in Aizumisato"
],
[
"福島県",
"なみえ焼そば",
"太めの麺を使った浪江町のご当地焼きそば",
"Namie Yakisoba",
"Yakisoba with thick noodles from Namie"
],
[
"福島県",
"あわまんじゅう",
"粟を使った饅頭",
"Awa Manju",
"Steamed bun made with millet"
],
[
"福島県",
"マミーすいとん",
"地域に伝わるすいとん料理",
"Mamī Suiton",
"Local dumpling soup (suiton)"
],
[
"福島県",
"高寺芯そば",
"そばの芯を使った郷土のそば",
"Kōdera Shin Soba",
"Local soba made with buckwheat core flour"
],
[
"茨城県",
"鮒甘露煮",
"鮒を甘辛く煮た料理",
"Funa Kanroni",
"Crucian carp simmered sweet and savory"
],
[
"茨城県",
"ほしいも",
"さつまいもを蒸して干した菓子",
"Hoshiimo",
"Steamed and dried sweet potato"
],
[
"茨城県",
"笠間の栗菓子文化",
"笠間産の栗を使った和菓子の文化",
"Kasama Chestnut Sweets Culture",
"Confectionery culture using Kasama chestnuts"
],
[
"茨城県",
"霞ヶ浦北浦の魚介類食文化〜佃煮・煮干し・釜揚げ〜",
"霞ヶ浦・北浦の魚介を佃煮や煮干しなどにして食べる文化",
"Fish and Shellfish Food Culture of Lakes Kasumigaura and Kitaura",
"Lake fish and shellfish prepared as tsukudani, dried and more"
],
[
"茨城県",
"牛久ワイン",
"牛久で造られてきたワイン",
"Ushiku Wine",
"Wine produced in Ushiku"
],
[
"栃木県",
"しもつかれ",
"鮭の頭や大豆・大根おろしなどを煮た初午の行事食",
"Shimotsukare",
"Dish of salmon head, soybeans and grated daikon eaten at the Hatsuuma festival"
],
[
"栃木県",
"宇都宮餃子",
"宇都宮で親しまれる餃子",
"Utsunomiya Gyoza",
"Gyoza beloved in Utsunomiya"
],
[
"栃木県",
"栃木上河内に伝わる「鮎の腐れ鮓」",
"鮎を発酵させて作る熟れ鮨",
"Ayu no Kusare-zushi",
"Fermented sweetfish sushi from Kaminokawachi, Tochigi"
],
[
"栃木県",
"佐野のいもフライ",
"里芋に衣をつけて揚げた佐野のご当地フライ",
"Sano Imo Fry",
"Breaded and fried taro, a Sano specialty"
],
[
"群馬県",
"焼きまんじゅう",
"串にさした饅頭に味噌ダレを塗って焼いたもの",
"Yaki Manju",
"Skewered buns grilled with miso sauce"
],
[
"群馬県",
"群馬のソースカツ丼",
"ご飯にソースにくぐらせたカツをのせた丼",
"Gunma Sauce Katsudon",
"Rice bowl topped with sauce-dipped cutlet"
],
[
"群馬県",
"桐生うどん",
"桐生地域のうどん",
"Kiryu Udon",
"Udon from Kiryu"
],
[
"群馬県",
"嬬恋くろこ",
"嬬恋村に伝わる郷土の食べ物",
"Tsumagoi Kuroko",
"Local food of Tsumagoi Village"
],
[
"群馬県",
"館林のうどん",
"館林地域のうどん",
"Tatebayashi Udon",
"Udon from Tatebayashi"
],
[
"埼玉県",
"草加せんべい",
"草加で作られる醤油味の堅焼きせんべい",
"Soka Senbei",
"Hard soy-sauce rice crackers from Soka"
],
[
"埼玉県",
"フライ・ゼリーフライ",
"行田で親しまれる小麦粉のフライとおから入りの揚げ物",
"Fry and Zeri Fry",
"Gyoda's flour-batter fry and okara-based fried croquette"
],
[
"埼玉県",
"こしがや鴨ネギ鍋",
"越谷産の鴨とねぎを使った鍋",
"Koshigaya Kamo Negi Nabe",
"Hot pot with Koshigaya duck and leeks"
],
[
"埼玉県",
"五家宝",
"きな粉をまぶした棒状の菓子",
"Gokabō",
"Stick-shaped sweet coated with kinako (roasted soybean flour)"
],
[
"埼玉県",
"妻沼のいなり寿司",
"熊谷市妻沼で親しまれるいなり寿司",
"Menuma no Inari-zushi",
"Inari sushi popular in Menuma, Kumagaya"
],
[
"埼玉県",
"煮ぼうとう",
"幅広の麺を野菜とともに煮込む郷土料理",
"Nibōtō",
"Wide noodles simmered with vegetables"
],
[
"埼玉県",
"狭山茶",
"埼玉県狭山地域で栽培される茶",
"Sayama Tea",
"Tea grown in the Sayama area"
],
[
"埼玉県",
"武蔵野地域のうどん文化（武蔵野肉汁うどん）",
"温かい肉汁につけて食べる武蔵野のうどん",
"Musashino Niku-jiru Udon",
"Udon dipped in hot meat broth, from Musashino"
],
[
"千葉県",
"太巻き祭り寿司",
"切り口に絵柄が現れる太巻き寿司",
"Futomaki Matsuri Zushi",
"Thick sushi rolls with patterned cross-sections"
],
[
"千葉県",
"鉄砲巻き",
"かんぴょうを芯にした細巻き寿司",
"Teppōmaki",
"Thin sushi roll with dried gourd strips"
],
[
"千葉県",
"勝浦タンタンメン",
"ラー油の辛みと玉ねぎが特徴の勝浦のご当地ラーメン",
"Katsuura Tantanmen",
"Katsuura ramen with chili oil and onion"
],
[
"千葉県",
"南房総地域のアジ文化〜なめろう、サンガ焼き、たたき、お刺身〜",
"南房総でアジをなめろうやたたきなどにして食べる文化",
"Aji Culture of Minamiboso",
"Horse mackerel eaten as namero, tataki and sashimi"
],
[
"東京都",
"武蔵野地域のうどん文化（小平糧うどん、村山かてうどん）",
"野菜などの糧を添えて食べる多摩地域のうどん",
"Kodaira Kate Udon and Murayama Kate Udon",
"Udon with vegetable toppings from the Tama area"
],
[
"東京都",
"桜鍋を中心とする馬肉食文化",
"馬肉を味噌や割り下で煮る桜鍋を中心とした食文化",
"Sakura Nabe and Horse Meat Culture",
"Hot pot of horse meat in miso or soy-based broth"
],
[
"東京都",
"桑都・八王子のふるさと料理〜桑都焼き・かてめし〜",
"八王子に伝わる桑都焼きやかてめしなどの郷土料理",
"Hachioji Furusato Cuisine",
"Local dishes such as Sōto-yaki and Kate-meshi from Hachioji"
],
[
"神奈川県",
"小田原蒲鉾",
"小田原で作られる魚のすり身の蒲鉾",
"Odawara Kamaboko",
"Fish paste cake made in Odawara"
],
[
"神奈川県",
"サンマーメン",
"野菜あんをのせた温かいラーメン",
"Sanma-men",
"Ramen topped with a vegetable starch sauce"
],
[
"神奈川県",
"曽我の梅干し",
"小田原市曽我地区の梅を使った梅干し",
"Soga Umeboshi",
"Pickled plums from the Soga district of Odawara"
],
[
"神奈川県",
"厚木のとん漬",
"豚肉を味噌に漬けた厚木の名物",
"Atsugi no Tonzuke",
"Atsugi specialty of pork marinated in miso"
],
[
"神奈川県",
"大山のきゃらぶき",
"蕗を甘辛く煮た伊勢原市大山の佃煮",
"Ōyama Kyarabuki",
"Butterbur simmered in soy, a tsukudani from Ōyama, Isehara"
],
[
"神奈川県",
"建長汁",
"野菜や豆腐を使った精進料理由来の汁物（けんちん汁）",
"Kenchō-jiru (Kenchin-jiru)",
"Soup of vegetables and tofu with roots in vegetarian temple cuisine"
],
[
"新潟県",
"えご",
"海藻のえご草を固めた郷土の食べ物",
"Egō",
"Gelled dish made from egonori seaweed"
],
[
"新潟県",
"へぎそば",
"つなぎに布海苔を使い、へぎ板に盛るそば",
"Hegi Soba",
"Soba made with funori seaweed, served on wooden hegi trays"
],
[
"新潟県",
"背脂ラーメン",
"背脂を浮かべた醤油ラーメン",
"Seabura Ramen",
"Soy-sauce ramen topped with pork back fat"
],
[
"新潟県",
"村上の鮭の食文化",
"村上で鮭を余すところなく使う食文化",
"Salmon Food Culture of Murakami",
"Food culture that uses every part of the salmon"
],
[
"新潟県",
"雪国の越冬料理〜ゼンマイ料理、だいこん料理、栃もち、煮菜（にいな）〜",
"雪国で冬を越すための保存食や郷土料理",
"Winter Survival Cuisine of Snow Country",
"Preserved foods and local dishes for getting through the snowy winter"
],
[
"新潟県",
"長岡・中越地域の雪国発酵・保存食文化",
"長岡・中越地域で受け継がれる発酵食品や保存食",
"Fermented and Preserved Foods of Nagaoka and Chuetsu",
"Fermented and preserved foods handed down in the Chuetsu area"
],
[
"富山県",
"ます寿し",
"鱒を使った押し寿司",
"Masu-zushi",
"Pressed sushi with trout"
],
[
"富山県",
"五箇山かぶら甘酢漬",
"五箇山のかぶらを甘酢に漬けた漬物",
"Gokayama Kabura Amazuzuke",
"Gokayama turnips pickled in sweet vinegar"
],
[
"富山県",
"大門素麺",
"射水市大門で作られる素麺",
"Daimon Sōmen",
"Somen noodles made in Daimon, Imizu"
],
[
"富山県",
"富山湾のホタルイカ",
"富山湾で獲れるホタルイカを使った食文化",
"Firefly Squid of Toyama Bay",
"Food culture using firefly squid from Toyama Bay"
],
[
"富山県",
"氷見のぶり食文化",
"氷見で水揚げされるぶりを使った食文化",
"Himi Yellowtail Food Culture",
"Cuisine using yellowtail landed at Himi"
],
[
"富山県",
"よごし",
"野菜などを和えた郷土料理",
"Yogoshi",
"Local dish of vegetables dressed together"
],
[
"石川県",
"美川のふぐの子糠漬",
"ふぐの卵巣を糠漬けにした郷土の珍味",
"Mikawa Fugu no Ko Nukazuke",
"Local delicacy of pufferfish ovaries pickled in rice bran"
],
[
"石川県",
"小松うどん",
"小松で親しまれるうどん",
"Komatsu Udon",
"Udon popular in Komatsu"
],
[
"石川県",
"白峰堅豆腐",
"白山市白峰で作られる堅い豆腐",
"Hakusan Katadōfu",
"Firm tofu made in Shiramine, Hakusan"
],
[
"石川県",
"かましいりこ",
"郷土で食べられるいりこ（煮干し）",
"Kamashi Iriko",
"Dried small fish (iriko) eaten locally"
],
[
"福井県",
"若狭地方のニシンのすし",
"ニシンを使った若狭地方の寿司",
"Wakasa Herring Sushi",
"Sushi made with herring from the Wakasa region"
],
[
"福井県",
"福井のソースカツ丼",
"ご飯に薄いカツを載せソースをかけた丼",
"Fukui Sauce Katsudon",
"Rice bowl topped with a thin cutlet and sauce"
],
[
"福井県",
"若狭おばま醤油干し",
"小浜で作られる魚の醤油干し",
"Wakasa Obama Shōyu-boshi",
"Fish dried in soy sauce from Obama"
],
[
"福井県",
"はまなみそ",
"大豆などを発酵させた保存食",
"Hamanamiso",
"Preserved food of fermented soybeans"
],
[
"福井県",
"ボルガライス",
"オムライスにカツをのせてソースをかけた料理",
"Borugaraisu",
"Omurice topped with a cutlet and sauce"
],
[
"福井県",
"越前北前料理",
"北前船の交易で伝わった食材を使う越前の料理",
"Echizen Kitamae Cuisine",
"Dishes using ingredients brought by Kitamae trading ships to Echizen"
],
[
"福井県",
"半夏生さばの食文化",
"半夏生の日に焼き鯖を食べる習わし",
"Hangesho Saba",
"Custom of eating grilled mackerel on Hangeshō day"
],
[
"福井県",
"へしこ",
"魚を塩漬けにしてから糠に漬け込んだ保存食",
"Heshiko",
"Fish salted and then pickled in rice bran"
],
[
"福井県",
"勝山北谷の鯖の熟れ鮨し",
"鯖を発酵させて作る勝山北谷の熟れ鮨",
"Katsuyama Kitadani Saba Narezushi",
"Fermented mackerel sushi from Kitadani, Katsuyama"
],
[
"福井県",
"敦賀のおぼろ昆布",
"昆布を薄く削った敦賀の名産",
"Tsuruga Oboro Kombu",
"Thinly shaved kelp, a Tsuruga specialty"
],
[
"山梨県",
"ほうとう",
"幅広の麺をかぼちゃなどの野菜と味噌仕立てで煮込む料理",
"Hōtō",
"Wide noodles stewed with pumpkin and vegetables in miso soup"
],
[
"山梨県",
"甲府鳥もつ煮",
"鶏のレバー・砂肝などを甘辛いタレで煮詰めた料理",
"Kōfu Tori Motsu-ni",
"Chicken liver and gizzard simmered in a sweet-savory sauce"
],
[
"山梨県",
"あけぼの大豆納豆",
"あけぼの大豆を使った納豆",
"Akebono Daizu Natto",
"Natto made from Akebono soybeans"
],
[
"山梨県",
"吉田のうどん",
"コシの強い麺が特徴の富士吉田のうどん",
"Yoshida Udon",
"Firm-textured udon from Fujiyoshida"
],
[
"山梨県",
"上野原せいだ芋の食文化〜せいだのたまじ、せいだ芋焼酎、せいだ芋のポテトフライ〜",
"上野原産の里芋「せいだ芋」を使った料理",
"Uenohara Seida Imo Food Culture",
"Dishes using Seida taro from Uenohara"
],
[
"山梨県",
"上野原酒まんじゅうの食文化",
"酒種を使って作る上野原の饅頭",
"Uenohara Sake Manju Food Culture",
"Steamed buns made with sake starter in Uenohara"
],
[
"長野県",
"謙信ずし（笹ずし）",
"笹の葉に具材をのせた押し寿司",
"Kenshin-zushi (Sasa-zushi)",
"Pressed sushi served on bamboo leaves"
],
[
"長野県",
"小布施丸なすおやき",
"小布施の丸なすを使ったおやき",
"Obuse Maru Nasu Oyaki",
"Oyaki dumplings filled with round eggplant from Obuse"
],
[
"長野県",
"美味だれ焼き鳥",
"美味だれをつけて焼く焼き鳥",
"Umadare Yakitori",
"Yakitori with umadare sauce"
],
[
"長野県",
"矢島凍み豆腐",
"凍らせて乾燥させた保存食の豆腐",
"Yajima Shimi Tōfu",
"Freeze-dried tofu, a preserved food"
],
[
"長野県",
"ローメン",
"蒸し麺をラム肉や野菜と炒めた伊那の名物",
"Rōmen",
"Steamed noodles stir-fried with lamb and vegetables, a specialty of Ina"
],
[
"長野県",
"献上寒晒しそば",
"寒中に水にさらして作る高級そば",
"Kenjō Kanzarashi Soba",
"Premium soba made by exposing the noodles to cold winter air and water"
],
[
"長野県",
"やたら",
"夏野菜などを刻んで和えた郷土料理",
"Yatara",
"Local dish of chopped summer vegetables dressed together"
],
[
"長野県",
"御幣餅（五平餅）",
"つぶしたご飯を串にさし、味噌ダレをつけて焼いたもち",
"Gohei Mochi",
"Mashed rice on skewers, grilled with miso sauce"
],
[
"長野県",
"小布施の栗菓子文化",
"小布施の栗を使った栗菓子",
"Obuse Chestnut Sweets Culture",
"Confectioneries made with Obuse chestnuts"
],
[
"長野県",
"長野市の粉もの文化〜そば、おやき、にらせんべい、おぶっこ、すいとん、こねつけ〜",
"そばや小麦粉を使った長野市の粉もの料理",
"Nagano City Flour-based Foods",
"Soba, oyaki and other flour-based dishes of Nagano City"
],
[
"長野県",
"天龍村の柚餅子",
"天龍村で作られる柚子を使った餅菓子",
"Tenryū Village Yuzu Mochi",
"Yuzu-flavored sweets made in Tenryū Village"
],
[
"長野県",
"ひだみの食文化〜ひだみ餅、ひだみコーヒーゼリー、ひだみ餡入りパイ〜",
"地域の食材「ひだみ」を使った料理や菓子",
"Hidami Food Culture",
"Dishes and sweets using the local ingredient hidami"
],
[
"岐阜県",
"朴葉寿司（白川町、下呂市・恵那市）",
"朴葉に包んだ寿司",
"Hoba-zushi",
"Sushi wrapped in magnolia leaves"
],
[
"岐阜県",
"寝寿司（ねずし）",
"魚などを発酵させた熟れ鮨",
"Ne-zushi",
"Fermented sushi (narezushi) made with fish"
],
[
"岐阜県",
"朴葉の食文化",
"朴葉を使った料理や保存の食文化",
"Hoba Leaf Food Culture",
"Cooking and preserving food with magnolia leaves"
],
[
"岐阜県",
"大歳のごっつお",
"大晦日に食べる郷土のごちそう",
"Ōtoshi no Gocchō",
"Traditional New Year's Eve feast"
],
[
"岐阜県",
"岐阜の鵜匠家に伝わる鮎鮨",
"鵜飼を営む家に伝わる鮎の寿司",
"Ayu-zushi of Cormorant Fishing Families",
"Sweetfish sushi handed down in cormorant-fishing households"
],
[
"岐阜県",
"へぼ甘露煮",
"蜂の子（へぼ）を甘辛く煮た郷土の食べ物",
"Hebo Kanroni",
"Wasp larvae simmered sweet and savory"
],
[
"静岡県",
"大井川のお茶請け食文化",
"大井川流域で茶とともに楽しむ漬物や菓子などの文化",
"Ōigawa Tea Snack Culture",
"Pickles and sweets enjoyed with tea along the Ōi River"
],
[
"静岡県",
"静岡おでん",
"黒いだしと黒はんぺん・出汁粉をかけて食べるおでん",
"Shizuoka Oden",
"Oden with a dark broth, topped with fish powder"
],
[
"静岡県",
"富士宮やきそば",
"蒸し麺を使い、肉かすなどを入れる富士宮のご当地焼きそば",
"Fujinomiya Yakisoba",
"Local yakisoba with steamed noodles and crispy pork bits"
],
[
"静岡県",
"西伊豆しおかつお",
"カツオを塩漬けにして作る西伊豆の保存食",
"Nishi-Izu Shio Katsuo",
"Salt-cured bonito, a preserved food of western Izu"
],
[
"静岡県",
"桜海老の沖あがり",
"桜えび漁の後に漁師が食べる料理",
"Sakuraebi no Okiagari",
"Fishermen's dish made after sakura shrimp fishing"
],
[
"静岡県",
"すわま",
"地域に伝わる郷土の食べ物",
"Suwama",
"Traditional local food"
],
[
"愛知県",
"きしめん",
"平たい麺の名古屋のうどん",
"Kishimen",
"Flat noodles, Nagoya's version of udon"
],
[
"愛知県",
"高浜とりめし",
"鶏肉を使った高浜の炊き込みご飯",
"Takahama Tori Meshi",
"Chicken rice from Takahama"
],
[
"愛知県",
"へきなん焼きそば",
"碧南で親しまれるご当地焼きそば",
"Hekinan Yakisoba",
"Local yakisoba from Hekinan"
],
[
"愛知県",
"五平餅",
"つぶしたご飯を串にさし味噌ダレをつけて焼いたもち",
"Gohei Mochi",
"Mashed rice on skewers, grilled with miso sauce"
],
[
"愛知県",
"ひきずり",
"名古屋コーチンを使ったすき焼き",
"Hikizuri",
"Sukiyaki made with Nagoya Cochin chicken"
],
[
"愛知県",
"瀬戸焼そば",
"豚の煮汁を使うのが特徴の瀬戸のご当地焼きそば",
"Seto Yakisoba",
"Yakisoba cooked with pork stock, a specialty of Seto"
],
[
"愛知県",
"いなぶ桶茶",
"稲武で作られる桶を使った茶",
"Inabu Oke Cha",
"Tea from Inabu made using wooden tubs"
],
[
"愛知県",
"お平（おひら）",
"野菜や乾物などを盛り合わせた煮物の郷土料理",
"Ohira",
"Local simmered dish of vegetables and dried foods in a large bowl"
],
[
"愛知県",
"豊橋ちくわ",
"豊橋で作られる竹輪",
"Toyohashi Chikuwa",
"Fish paste tubes made in Toyohashi"
],
[
"愛知県",
"名古屋コーチンの食文化",
"名古屋コーチンを使った料理の文化",
"Nagoya Cochin Food Culture",
"Cuisine using Nagoya Cochin chicken"
],
[
"愛知県",
"豊川いなり寿司",
"豊川で親しまれるいなり寿司",
"Toyokawa Inari-zushi",
"Inari sushi from Toyokawa"
],
[
"愛知県",
"味噌煮込みうどん",
"八丁味噌などで煮込む硬めの麺のうどん",
"Miso Nikomi Udon",
"Firm udon simmered in Hatcho miso broth"
],
[
"愛知県",
"にかけうどん",
"煮かけの具をのせたうどん",
"Nikake Udon",
"Udon with a simmered topping"
],
[
"愛知県",
"尾張なごやの郷土料理 おしもん・おこしもん",
"尾張名古屋の暮らしの中で伝わる郷土料理",
"Owari Nagoya Local Cuisine: Oshimon and Okoshimon",
"Traditional local dishes of Owari Nagoya"
],
[
"三重県",
"石榑茶",
"いなべ市石榑地区の茶",
"Ishigure Tea",
"Tea from the Ishigure district of Inabe"
],
[
"三重県",
"四日市とんてき",
"厚切りの豚肉を濃厚なタレで焼いた料理",
"Yokkaichi Tonteki",
"Thick pork steak with rich sauce"
],
[
"三重県",
"伊勢いもとろろ",
"伊勢いもを使ったとろろ料理",
"Ise Imo Tororo",
"Grated Ise yam dish"
],
[
"三重県",
"津ぎょうざ",
"大きな皮で包んだ津市の餃子",
"Tsu Gyoza",
"Large-wrapper gyoza of Tsu"
],
[
"三重県",
"梶賀のあぶり",
"梶賀地区で作られる魚の燻製加工品",
"Kajika no Aburi",
"Smoked fish product made in Kajika"
],
[
"三重県",
"亀山みそ焼きうどん",
"味噌ダレで焼いたうどん",
"Umi no Nanakusa-gayu",
"Seven-herb rice porridge made with seaweeds"
],
[
"三重県",
"海の七草粥",
"海藻などを具にした七草粥",
"Kameyama Miso Yaki Udon",
"Udon stir-fried with miso sauce"
],
[
"三重県",
"桑名焼き蛤",
"桑名の焼き蛤",
"Kuwana Yaki Hamaguri",
"Grilled clams of Kuwana"
],
[
"三重県",
"伊勢うどん",
"やわらかい太麺に濃いタレをかけて食べるうどん",
"Ise Udon",
"Soft thick noodles with a rich dark sauce"
],
[
"三重県",
"てこね寿司",
"漁師が考案したとされる魚の漬けをのせた寿司",
"Tekone-zushi",
"Sushi with fish marinated in soy sauce, said to be created by fishermen"
],
[
"滋賀県",
"よびしの食",
"滋賀に伝わる郷土の食文化",
"Yobishi no Shoku",
"Traditional local food culture of Shiga"
],
[
"滋賀県",
"近江日野の伝統料理〜鯛そうめん、肉めし、日野菜漬け〜",
"日野に伝わる鯛そうめんや日野菜漬けなどの郷土料理",
"Ōmi Hino Traditional Cuisine",
"Local dishes of Hino such as sea bream somen and Hinona pickles"
],
[
"滋賀県",
"安土のふなやき",
"安土で親しまれる鮒を使った料理",
"Azuchi no Funayaki",
"Local dish using crucian carp from Azuchi"
],
[
"滋賀県",
"大津のうなぎ食文化",
"大津で食べられてきたうなぎの食文化",
"Ōtsu Eel Food Culture",
"Food culture of eating eel in Ōtsu"
],
[
"滋賀県",
"石部のいもつぶし",
"石部地区に伝わるいもを使った郷土料理",
"Ishibe no Imotsubushi",
"Local mashed-taro dish from Ishibe"
],
[
"滋賀県",
"近江商人の食文化〜どろ亀汁（どろがめじる）・黄飯（きめし）〜",
"近江商人の暮らしに根づいた料理",
"Ōmi Merchant Cuisine: Dorogame-jiru and Kimeshi",
"Dishes rooted in the lives of Ōmi merchants"
],
[
"京都府",
"茶汁",
"茶を使った汁物",
"Cha-jiru",
"Soup made with tea"
],
[
"京都府",
"松花堂弁当",
"仕切りのある箱に料理を盛った弁当",
"Shōkadō Bentō",
"Bento served in a box with dividers"
],
[
"京都府",
"西京白みそ",
"甘みのある京都の白味噌",
"Saikyō Shiro Miso",
"Sweet white miso of Kyoto"
],
[
"京都府",
"京漬物すぐき",
"すぐき菜を乳酸発酵させた京都の漬物",
"Kyō Tsukemono Suguki",
"Kyoto pickle of fermented suguki greens"
],
[
"大阪府",
"大阪だしうどん",
"出汁の旨みを活かした大阪のうどん",
"Ōsaka Dashi Udon",
"Udon highlighting the umami of dashi"
],
[
"大阪府",
"大阪ワイン",
"大阪で造られてきたワイン",
"Ōsaka Wine",
"Wine produced in Osaka"
],
[
"大阪府",
"高槻うどんギョーザ",
"うどんを具材に使った餃子",
"Takatsuki Udon Gyoza",
"Gyoza using udon as a filling"
],
[
"大阪府",
"粟おこし",
"粟や米を固めた菓子",
"Awa Okoshi",
"Confection of puffed millet or rice bound together"
],
[
"大阪府",
"大阪の鉄板粉モン文化（お好み焼・たこ焼）",
"鉄板で焼く粉もの料理の文化",
"Osaka Teppan Konamon Culture",
"Culture of griddled flour dishes such as okonomiyaki and takoyaki"
],
[
"大阪府",
"大阪の鯨ハリハリ鍋",
"鯨肉と水菜を使った鍋",
"Osaka Kujira Hari-hari Nabe",
"Whale and mizuna hot pot"
],
[
"大阪府",
"石切のおでん",
"石切で親しまれるおでん",
"Ishikiri Oden",
"Oden popular in Ishikiri"
],
[
"兵庫県",
"西谷地区のちまき",
"西谷地区に伝わる笹などで包んだちまき",
"Nishitani Chimaki",
"Rice dumplings wrapped in leaves from the Nishitani district"
],
[
"兵庫県",
"ぼたん鍋",
"猪肉を使った鍋料理",
"Botan Nabe",
"Wild boar hot pot"
],
[
"兵庫県",
"高砂にくてん",
"牛すじとこんにゃくなどを使った高砂の鉄板料理",
"Takasago Nikuten",
"Griddle dish of beef tendon and konnyaku from Takasago"
],
[
"兵庫県",
"出石皿そば",
"小皿に盛り分けて食べる出石のそば",
"Izushi Sara Soba",
"Soba served on small plates, an Izushi specialty"
],
[
"兵庫県",
"明石焼（玉子焼）",
"出汁につけて食べる、たこ入りの卵生地の料理",
"Akashi-yaki (Tamago-yaki)",
"Egg-batter balls with octopus, dipped in dashi"
],
[
"兵庫県",
"佐用ホルモン焼きうどん",
"ホルモンとうどんを味付けして焼いた料理",
"Sayo Horumon Yaki Udon",
"Offal and udon stir-fried with seasoning"
],
[
"兵庫県",
"朝倉山椒を用いた食文化",
"朝倉山椒を使った料理や加工品",
"Asakura Sanshō Food Culture",
"Cooking and products using Asakura sanshō pepper"
],
[
"兵庫県",
"かつめし",
"カツをデミグラス系のタレで食べるご飯料理",
"Katsumeshi",
"Rice dish with a cutlet in demi-glace-style sauce"
],
[
"奈良県",
"三輪そうめん",
"三輪地方で作られる手延べ素麺",
"Miwa Sōmen",
"Hand-pulled somen from the Miwa area"
],
[
"奈良県",
"飛鳥鍋",
"鶏肉などを牛乳を使った出汁で煮る鍋",
"Asuka Nabe",
"Hot pot with chicken in a milk-based broth"
],
[
"奈良県",
"吉野本葛",
"吉野で作られる葛粉",
"Yoshino Hon-Kuzu",
"Authentic kudzu starch from Yoshino"
],
[
"奈良県",
"柿の葉寿司",
"柿の葉で包んだ押し寿司",
"Kaki-no-ha Zushi",
"Pressed sushi wrapped in persimmon leaves"
],
[
"和歌山県",
"金山寺味噌/径山寺味噌",
"大豆や麦、野菜を使った味噌",
"Kinzanji Miso",
"Miso with soybeans, barley and vegetables"
],
[
"和歌山県",
"加太の煮あい",
"加太に伝わる煮物の郷土料理",
"Kada no Niai",
"Local simmered dish of Kada"
],
[
"和歌山県",
"湯浅の醤油",
"湯浅で作られてきた醤油",
"Yuasa Soy Sauce",
"Soy sauce made in Yuasa"
],
[
"鳥取県",
"大山おこわ",
"大山地域で作られるおこわ",
"Daisen Okowa",
"Sticky rice dish from Daisen"
],
[
"鳥取県",
"いただき",
"鳥取に伝わる郷土の食べ物",
"Itadaki",
"Traditional Tottori local food"
],
[
"島根県",
"清水羊羹",
"島根の清水地区の羊羹",
"Shimizu Yōkan",
"Yōkan sweet from the Shimizu district"
],
[
"島根県",
"津和野の芋煮",
"津和野に伝わる芋を使った料理",
"Tsuwano Imoni",
"Local taro stew of Tsuwano"
],
[
"島根県",
"東出雲の畑ほし柿",
"東出雲で作られる干し柿",
"Higashi-Izumo Hata Hoshigaki",
"Dried persimmons from Higashi-Izumo"
],
[
"島根県",
"松江の茶の湯文化",
"茶の湯とともに発展した松江の菓子や食文化",
"Matsue Tea Ceremony Culture",
"Sweets and food culture grown alongside Matsue's tea ceremony"
],
[
"島根県",
"出雲そば",
"殻ごと挽く風味の強いそば",
"Izumo Soba",
"Strongly flavored soba made with whole-grain flour"
],
[
"島根県",
"大田の箱ずし",
"大田地域に伝わる箱寿司",
"Ōda no Hakozushi",
"Box-pressed sushi from Ōda"
],
[
"島根県",
"高津川の鮎料理〜鮎だし雑煮、塩焼き、せごし、鮎飯、うるか、うるか茄子〜",
"高津川の鮎を使った郷土料理",
"Takatsu River Ayu Cuisine",
"Local dishes using sweetfish from the Takatsu River"
],
[
"岡山県",
"くさぎ菜のかけめし",
"くさぎ菜を使ったかけご飯",
"Kusagina no Kakemeshi",
"Rice topped with kusagina greens"
],
[
"岡山県",
"日生カキオコ（カキ入りお好み焼き）",
"牡蠣入りのお好み焼き",
"Hinase Kaki-Oko",
"Okonomiyaki with oysters"
],
[
"岡山県",
"津山の牛肉料理〜そずり鍋、干し肉、ホルモンうどん、煮こごり、よめなかせ〜",
"津山の牛肉文化から生まれた料理",
"Tsuyama Beef Cuisine",
"Dishes born from Tsuyama's beef culture"
],
[
"岡山県",
"ひるぜん焼そば",
"蒜山地域の味噌ダレの焼きそば",
"Hiruzen Yakisoba",
"Yakisoba with miso sauce from Hiruzen"
],
[
"岡山県",
"備中鴨方手延べ麺",
"鴨方で作られる手延べ麺",
"Bitchū Kamogata Hand-pulled Noodles",
"Hand-pulled noodles made in Kamogata"
],
[
"岡山県",
"ふなめし",
"鮒を使った郷土料理",
"Funa-meshi",
"Local dish using crucian carp"
],
[
"岡山県",
"岡山ばらずし",
"具だくさんで彩りのよい岡山のちらし寿司",
"Okayama Barazushi",
"Colorful scattered sushi with many toppings"
],
[
"広島県",
"魚飯",
"魚を使った郷土のご飯料理",
"Uo-meshi",
"Rice dish with fish"
],
[
"広島県",
"海軍ゆかりの食文化〜海軍カレー・ビーフシチュー・肉じゃが〜",
"呉の海軍に由来する洋食文化",
"Navy-related Food Culture",
"Western-style dishes such as curry, beef stew and nikujaga originating from the Kure naval base"
],
[
"広島県",
"備後府中焼き",
"福山市府中のお好み焼き",
"Bingo Fuchū-yaki",
"Okonomiyaki-style dish from Fuchū, Fukuyama"
],
[
"広島県",
"府中味噌",
"府中で作られる味噌",
"Fuchū Miso",
"Miso made in Fuchū"
],
[
"広島県",
"三原焼き",
"三原で親しまれる鉄板料理",
"Mihara-yaki",
"Griddle dish popular in Mihara"
],
[
"広島県",
"かきの土手鍋",
"牡蠣を味噌で鍋の縁に塗って煮る広島の鍋",
"Kaki no Dote Nabe",
"Oyster hot pot with miso lining the pot"
],
[
"広島県",
"美酒鍋",
"酒処・西条の酒を使う鍋",
"Bishu Nabe",
"Hot pot using Saijō sake"
],
[
"広島県",
"さつま",
"広島に伝わる郷土料理",
"Satsuma",
"Traditional Hiroshima local dish"
],
[
"広島県",
"いんおこ",
"地域に伝わる郷土の食べ物",
"Inoko",
"Local Hiroshima food"
],
[
"山口県",
"岩国寿司",
"具を何層にも重ねた岩国の押し寿司",
"Iwakuni Zushi",
"Layered pressed sushi of Iwakuni"
],
[
"山口県",
"あんこ寿司",
"山口県に伝わる寿司",
"Anko Zushi",
"Traditional Yamaguchi sushi"
],
[
"山口県",
"鯨肉郷土料理",
"山口の捕鯨文化に由来する鯨肉料理",
"Whale Meat Local Cuisine",
"Whale dishes rooted in Yamaguchi's whaling culture"
],
[
"山口県",
"ゆうれい寿司",
"山口県に伝わる寿司",
"Yūrei Zushi",
"Traditional Yamaguchi sushi"
],
[
"徳島県",
"阿波ういろ",
"米粉を使って蒸し上げる徳島のういろう",
"Awa Uiro",
"Steamed rice-flour sweet of Tokushima"
],
[
"徳島県",
"牟岐の浜節句弁当",
"牟岐の浜節句の行事で食べられる弁当",
"Mugi no Hama Sekku Bentō",
"Bento eaten at Mugi's beach festival"
],
[
"徳島県",
"島そうめん",
"島で作られるそうめん",
"Shima Sōmen",
"Somen noodles made on the island"
],
[
"徳島県",
"鳴門わかめ料理",
"鳴門産のわかめを使った料理",
"Naruto Wakame Dishes",
"Dishes using Naruto wakame seaweed"
],
[
"徳島県",
"「木頭ゆず」を使った郷土料理「かきまぜ」",
"木頭ゆずを使ったちらし寿司風の郷土料理",
"Kamaze with Kitō Yuzu",
"Local chirashi-style dish using Kitō yuzu"
],
[
"徳島県",
"牟岐の押し寿司",
"牟岐に伝わる押し寿司",
"Mugi Oshizushi",
"Pressed sushi of Mugi"
],
[
"徳島県",
"御所のたらいうどん",
"大きなたらいに入れて食べるうどん",
"Gosho no Tarai Udon",
"Udon served in a large tub"
],
[
"徳島県",
"はんごろし",
"もち米とうるち米を粗くつぶして作るおはぎ",
"Hangoroshi",
"Ohagi made of coarsely mashed rice"
],
[
"香川県",
"小豆島そうめん",
"小豆島で作られる手延べ素麺",
"Shōdoshima Sōmen",
"Hand-pulled somen from Shōdoshima"
],
[
"香川県",
"オリーブ新漬け",
"オリーブの実を塩水に漬けた漬物",
"Olive Shin-zuke",
"Olives pickled in brine"
],
[
"香川県",
"讃岐うどん",
"コシの強い麺が特徴の香川のうどん",
"Sanuki Udon",
"Firm-textured udon of Kagawa"
],
[
"愛媛県",
"いぎす豆腐",
"海藻のいぎすを固めた郷土の食べ物",
"Igisu Tōfu",
"Local food set with igisu seaweed"
],
[
"愛媛県",
"津島の六宝",
"津島に伝わる郷土料理",
"Tsushima no Roppō",
"Local cuisine from Tsushima"
],
[
"愛媛県",
"北条鯛めし",
"鯛を使った炊き込み風の鯛めし",
"Hōjō Tai-meshi",
"Sea bream rice dish from Hōjō"
],
[
"愛媛県",
"宇和島鯛めし",
"鯛の刺身をタレと卵で食べるご飯料理",
"Uwajima Tai-meshi",
"Sea bream sashimi with sauce and egg over rice"
],
[
"愛媛県",
"三津浜焼き",
"麺入りのお好み焼き",
"Mitsuhama-yaki",
"Okonomiyaki with noodles"
],
[
"高知県",
"カツオのたたき",
"表面を炙ったカツオを薬味とともに食べる料理",
"Katsuo no Tataki",
"Seared bonito served with condiments"
],
[
"高知県",
"へらずし",
"高知に伝わる郷土の寿司",
"Herazushi",
"Traditional Kochi sushi"
],
[
"高知県",
"中日そば",
"高知の地域で親しまれるそば",
"Nakahi Soba",
"Soba popular in a Kochi area"
],
[
"高知県",
"皿鉢料理",
"大皿に盛り付けられた宴席の郷土料理",
"Sawachi Ryōri",
"Banquet dishes served on a large platter"
],
[
"高知県",
"ゆのすの恵み料理",
"ゆのす地域の食材を活かした郷土料理",
"Yunosu no Megumi Ryōri",
"Local dishes using ingredients from Yunosu"
],
[
"高知県",
"ゆず料理",
"高知産のゆずを使った料理",
"Yuzu Dishes",
"Dishes using Kochi yuzu"
],
[
"高知県",
"なすのたたき",
"なすを素揚げなどにして薬味と合わせる料理",
"Nasu no Tataki",
"Eggplant fried or seared, served with condiments"
],
[
"高知県",
"白玉糖",
"土佐で作られる砂糖",
"Shiratama-tō",
"Sugar made in Tosa"
],
[
"高知県",
"香南ニラ塩焼そば",
"ニラと塩味でいただく香南市の焼きそば",
"Kōnan Nira Shio Yakisoba",
"Yakisoba with garlic chives and salt from Kōnan"
],
[
"高知県",
"土佐宗田節",
"宗田鰹を使った節",
"Tosa Sōda-bushi",
"Dried bonito made from frigate mackerel"
],
[
"高知県",
"こけらずし",
"高知に伝わる押し寿司",
"Kokera-zushi",
"Traditional Kochi pressed sushi"
],
[
"高知県",
"柚子酢締めのあゆ姿寿司",
"柚子酢で締めた鮎を姿のまま使った寿司",
"Yuzu-su Jime Ayu Sugata-zushi",
"Whole sweetfish sushi cured in yuzu vinegar"
],
[
"福岡県",
"北九州の糠の食文化",
"糠床を使う北九州の食文化",
"Kitakyushu Nuka Food Culture",
"Food culture of rice-bran beds in Kitakyushu"
],
[
"福岡県",
"小倉焼うどん",
"小倉で親しまれる焼うどん",
"Kokura Yaki Udon",
"Stir-fried udon popular in Kokura"
],
[
"福岡県",
"うなぎのせいろ蒸し",
"うなぎをせいろで蒸したご飯料理",
"Unagi no Seiro-mushi",
"Eel steamed on rice in a bamboo steamer"
],
[
"福岡県",
"久留米焼きとり",
"豚バラなどを串に刺す久留米の焼き鳥",
"Kurume Yakitori",
"Kurume's skewered pork belly yakitori"
],
[
"福岡県",
"小郡の鴨を取り巻く食文化",
"小郡で受け継がれる鴨の食文化",
"Duck Food Culture of Ogōri",
"Duck food culture handed down in Ogōri"
],
[
"福岡県",
"久留米ラーメン",
"豚骨スープの久留米のラーメン",
"Kurume Ramen",
"Pork bone broth ramen of Kurume"
],
[
"福岡県",
"あごだし",
"トビウオ（あご）から取る出汁",
"Ago-dashi",
"Soup stock made from flying fish (ago)"
],
[
"福岡県",
"鶏ぼっかけ",
"鶏肉を使った郷土の食べ物",
"Tori Bokkake",
"Local chicken dish"
],
[
"福岡県",
"福岡柳川／貝柱粕漬・海茸粕漬",
"柳川の貝柱・海茸を粕漬けにした珍味",
"Yanagawa Kashiwa Kasuzuke and Umikinoko Kasuzuke",
"Scallop adductor and sea mushroom pickled in sake lees"
],
[
"福岡県",
"えつ料理",
"筑後川で獲れる「えつ」を使った料理",
"Etsu Ryōri",
"Dishes using etsu fish from the Chikugo River"
],
[
"福岡県",
"筑前朝倉蒸し雑煮",
"筑前朝倉の蒸し雑煮",
"Chikuzen Asakura Mushi Zōni",
"Steamed zoni of Chikuzen Asakura"
],
[
"福岡県",
"糸島そうめんちり",
"糸島のそうめんを使ったちり鍋",
"Itoshima Sōmen Chiri",
"Chiri hot pot with Itoshima somen"
],
[
"佐賀県",
"ふなんこぐい（鮒の昆布巻き）",
"鮒を昆布で巻いて煮た郷土料理",
"Funankoi-gui (Funa no Kobumaki)",
"Crucian carp rolled in kelp and simmered"
],
[
"佐賀県",
"相知高菜漬",
"相知地区の高菜漬",
"Ōchi Takana-zuke",
"Pickled mustard greens of Ōchi"
],
[
"佐賀県",
"佐賀シシリアンライス",
"ご飯に炒めた肉と生野菜をのせた料理",
"Saga Sicilian Rice",
"Rice topped with fried meat and raw vegetables"
],
[
"佐賀県",
"嬉野温泉湯どうふ",
"温泉水で豆腐を煮た嬉野の名物",
"Ureshino Onsen Yudōfu",
"Tofu simmered in hot spring water, an Ureshino specialty"
],
[
"佐賀県",
"須古寿し",
"須古地域に伝わる寿司",
"Suko Zushi",
"Traditional sushi of the Suko district"
],
[
"長崎県",
"島原名物かんざらし",
"白玉団子に蜜をかけた島原のデザート",
"Shimabara Kanzarashi",
"Shiratama dumplings with syrup, a Shimabara dessert"
],
[
"長崎県",
"かんころ餅",
"干し芋（かんころ）を使った餅",
"Kankoro Mochi",
"Rice cake made with dried sweet potato"
],
[
"長崎県",
"壱岐の麦焼酎",
"壱岐で造られる麦焼酎",
"Iki Barley Shochu",
"Barley shochu made on Iki"
],
[
"長崎県",
"対馬ろくべえ",
"さつまいもから作る麺・対馬の郷土料理",
"Tsushima Rokubei",
"Noodles made from sweet potato, a Tsushima specialty"
],
[
"長崎県",
"平戸寿司（押し寿司）",
"平戸の押し寿司",
"Hirado Zushi (Oshizushi)",
"Pressed sushi of Hirado"
],
[
"長崎県",
"川内かまぼこ",
"川内で作られるかまぼこ",
"Kawachi Kamaboko",
"Fish cake made in Kawachi"
],
[
"長崎県",
"島原手延そうめん",
"島原で作られる手延べ素麺",
"Shimabara Hand-pulled Somen",
"Hand-pulled somen from Shimabara"
],
[
"長崎県",
"五島うどん",
"五島列島で作られる手延べうどん",
"Goto Udon",
"Hand-pulled udon from the Goto Islands"
],
[
"熊本県",
"球磨焼酎",
"球磨地方で造られる米焼酎",
"Kuma Shochu",
"Rice shochu from the Kuma region"
],
[
"熊本県",
"阿蘇たかな漬",
"阿蘇の高菜漬",
"Aso Takana-zuke",
"Pickled mustard greens from Aso"
],
[
"熊本県",
"からし蓮根",
"蓮根に辛子味噌を詰めて揚げた郷土料理",
"Karashi Renkon",
"Lotus root stuffed with mustard miso and fried"
],
[
"熊本県",
"南関そうめん",
"南関町で作られる素麺",
"Nankan Sōmen",
"Somen made in Nankan"
],
[
"大分県",
"頭料理",
"魚の頭などを使った郷土料理",
"Atama Ryōri",
"Local dishes using fish heads"
],
[
"大分県",
"佐伯ごまだし",
"魚とごまを使った佐伯のだし調味料",
"Saiki Gomadashi",
"Fish and sesame seasoning from Saiki"
],
[
"大分県",
"黄飯（おうはん）",
"くちなしで色をつけたご飯",
"Ōhan",
"Rice colored with gardenia"
],
[
"大分県",
"戸次のほうちょう",
"戸次地区に伝わる郷土の料理",
"Bechiki no Hōchō",
"Traditional local dish of Bechiki"
],
[
"大分県",
"りゅうきゅう",
"魚の切り身をタレに漬けてご飯にのせる料理",
"Ryūkyū",
"Fish slices marinated in sauce, served over rice"
],
[
"宮崎県",
"日向市細島の特徴的な魚食文化",
"細島漁港の魚介を活かす食文化",
"Hyūga Hosojima Fish Food Culture",
"Food culture using fish from Hosojima port"
],
[
"宮崎県",
"栗おはぎ",
"栗を使ったおはぎ",
"Kuri Ohagi",
"Ohagi with chestnuts"
],
[
"宮崎県",
"菜豆腐",
"菜を入れて作る豆腐",
"Na Dōfu",
"Tofu made with greens"
],
[
"鹿児島県",
"鹿児島の壺造り黒酢",
"壺で長期間発酵させて作る黒酢",
"Kagoshima Tsubo-zukuri Black Vinegar",
"Black vinegar fermented in clay pots"
],
[
"鹿児島県",
"あくまき",
"灰汁に浸したもち米を竹皮で包んで煮たもの",
"Akumaki",
"Sticky rice soaked in lye and boiled in bamboo leaves"
],
[
"鹿児島県",
"なり味噌",
"鹿児島に伝わる味噌",
"Nari Miso",
"Traditional Kagoshima miso"
],
[
"鹿児島県",
"薩摩焼酎",
"薩摩地方で造られる焼酎",
"Satsuma Shochu",
"Shochu made in Satsuma"
],
[
"鹿児島県",
"奄美黒糖焼酎",
"奄美で造られる黒糖焼酎",
"Amami Kokutō Shochu",
"Brown sugar shochu from Amami"
],
[
"鹿児島県",
"姶良の煮しめ",
"姶良に伝わる煮しめ",
"Aira no Nishime",
"Simmered vegetables from Aira"
],
[
"鹿児島県",
"ぷちむっちゃー",
"鹿児島に伝わる郷土の食べ物",
"Puchi Muchā",
"Local food of Kagoshima"
],
[
"鹿児島県",
"つけ揚げ（さつま揚げ）",
"魚のすり身を揚げた練り物",
"Tsukeage (Satsuma-age)",
"Fried fish paste cake"
],
[
"鹿児島県",
"がね",
"さつまいもなどを使った郷土の揚げ物",
"Gane",
"Fried local dish made with sweet potato"
],
[
"沖縄県",
"ラフテー",
"豚バラ肉を泡盛や醤油で煮込む料理",
"Rafute",
"Pork belly simmered in awamori and soy sauce"
],
[
"沖縄県",
"田芋（ターンム）料理",
"田芋を使った沖縄の料理",
"Tannmu (Taro) Dishes",
"Dishes made with Okinawan taro"
],
[
"沖縄県",
"勝連のもずくてんぷら",
"勝連産のもずくを使った天ぷら",
"Katsuren Mozuku Tempura",
"Tempura with Katsuren mozuku seaweed"
],
[
"沖縄県",
"ティビチ料理",
"豚足を使った料理",
"Tibichi Dishes",
"Pork trotter dishes"
],
[
"沖縄県",
"ブクブクー茶",
"泡立てた茶をのせる沖縄の茶",
"Bukubuku Tea",
"Foamy tea topped with froth"
]
];
