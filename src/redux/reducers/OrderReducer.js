import { ActionTypes } from "../constants/action-type";
import Chapati from '../Assests/Veg/Chapati.jpg';
import Cocount_rice from '../Assests/Veg/cocount_rice.jpg';
import Dosa from '../Assests/Veg/Dosa.jpg';
import Curd_rice from '../Assests/Veg/curd_rice.jpg';
import Idly from '../Assests/Veg/Idly.jpg';
import Leman_rice from '../Assests/Veg/leman_rice.jpg';
import Puri from '../Assests/Veg/Puri.jpg';
import Meals from '../Assests/Veg/Meals.jpg';
import Pongal from '../Assests/Veg/pongal.jpg';
import Tomato_rice from '../Assests/Veg/tomato_rice.jpg';
import thanthuri from '../Assests/Non_veg/thanthuri.jpg';
import blood_rost from '../Assests/Non_veg/blood_rost.jpg';
import chiken from '../Assests/Non_veg/chiken.jpg';
import egg from '../Assests/Non_veg/egg.jpg';
import fish from '../Assests/Non_veg/fish.jpg';
import lalipop from '../Assests/Non_veg/lalipop.jpg';
import matton from '../Assests/Non_veg/matton.jpg';
import matton_soup from '../Assests/Non_veg/matton_soup.jpg';
import biriyani from '../Assests/Non_veg/biriyani.jpg';
import non_meals from '../Assests/Non_veg/meals.jpg';
import meals from '../Assests/Chinse/meals.jpg';
import bargar from '../Assests/Chinse/bargar.jpg';
import fran from '../Assests/Chinse/fran.jpg';
import fried_rice from '../Assests/Chinse/fried_rice.jpg';
import kabab from '../Assests/Chinse/kabab.jpg';
import noodles from '../Assests/Chinse/noodles.jpg';
import soup from '../Assests/Chinse/soup.jpg';
import pizza from '../Assests/Chinse/pizza.jpg';
import tea from '../Assests/Chinse/tea.jpg';
import manchuriyan from '../Assests/Chinse/manchuriyan.jpg';

const initialState = {

    Order: {
        Veg: [
            [{ "image": Chapati, "name": "Chapti", "rate": 40, "describe": "Chapatis are one of the most common forms of wheat bread which are a staple food in the Indian subcontinent. The carbonized wheat grains discovered at the excavations at Mohenjo-daro are of a similar variety to an endemic species of wheat still to be found in India today. The Indus Valley is known to be one of the ancestral lands of cultivated wheat. Chapati is a form of roti or rotta (bread). The words are often used interchangeably." },
            { "image": Cocount_rice, "name": "Cocount_rice", "rate": 30, "describe": "Coconut rice is a dish prepared by soaking white rice in coconut milk or cooking it with coconut flakes. As both the coconut and the rice-plant are commonly found in the tropics all-around the world, coconut rice too is found in many cultures throughout the world, spanning across the equator from the Indian subcontinent, Southeast Asia, South America, Central America, East Africa, West Africa, the Caribbean and Oceania." }],
            [{ "image": Dosa, "name": "Dosa", "rate": 45, "describe": "A dosa is a thin pancake or crepe originating from South India, made from a fermented batter predominantly consisting of lentils and rice. It is somewhat similar to a crepe in appearance, although savoury flavours are generally emphasized (sweet variants also exist). Its main ingredients are rice and black gram, ground together in a fine, smooth batter with a dash of salt, then fermented." },
            { "image": Curd_rice, "name": "Curd_rice", "rate": 30, "describe": "Curd rice, also called yogurt rice, is a dish originating from India. The word curd in Indian English refers to unsweetened probiotic yogurt. It is most popular in the South Indian states of Tamil Nadu, Kerala , Karnataka, Telangana and Andhra Pradesh; and also in Maharashtra. In the state of Maharashtra it is known as dahi bhat. In the state of Tamil Nadu it is called thayir saadam" }],
            [{ "image": Idly, "name": "Idly", "rate": 20, "describe": "The cakes are made by steaming a batter consisting of fermented black lentils (de-husked) and rice. The fermentation process breaks down the starches so that they are more readily metabolised by the body Idli has several variations, including rava idli, which is made from semolina. Regional variants include sanna of Konkan." },
            { "image": Leman_rice, "name": "Leman_rice", "rate": 30, "describe": "Lemon Rice also known as chitranna or nimmakaya pulihora is a crunchy, flavorful and tangy dish that is easy to make and tastes so good. Lemon juice, fried nuts, aromatic herbs and spices combine perfectly to give this steamed rice an amazing spicy, tangy and nutty flavor. The nuts add a crunch for the perfect rice dish texture. This vegan lemon rice recipe is sure to become one of your favorite rice dishes." }],
            [{ "image": Puri, "name": "Puri", "rate": 35, "describe": "Puri (sometimes misspelled as poori) is a deep-fried bread made from unleavened whole-wheat flour that originated in the Indian subcontinent. It is eaten for breakfast or as a snack or light meal. It is usually served with a savory curry or bhaji, as in puri bhaji, but may also be eaten with sweet dishes." },
            { "image": Meals, "name": "Meals", "rate": 80, "describe": "A meal is an eating occasion that takes place at a certain time and includes prepared food.[1][2] The names used for specific meals in English vary, depending on the speaker's culture, the time of day, or the size of the meal." }],
            [{ "image": Pongal, "name": "Pongal", "rate": 40, "describe": "Venn (Tamil word for white) Pongal is a popular savory dish in Tamil, Sri Lankan and other South Indian homes and is typically served as a special breakfast especially in Tamil Nadu and Northern and Eastern Sri Lanka. It is usually served with sambar and coconut chutney." },
            { "image": Tomato_rice, "name": "Tomato_rice", "rate": 30, "describe": "Spanish rice, also known as Mexican rice or red rice (Spanish: arroz rojo), is a Mexican side dish or an ingredient in other dishes made from white rice, tomatoes, garlic, onions, etc. The name Spanish rice is only used in the US; it does not originate in Spain.[1] In Iran and Persian cuisine, a similar dish is called Istanboli Polo (Persian: استانبولی پلو). It dates back to Qajar Iran. It is known as Persian tomato rice in the Western world." }]
        ],
        Non_veg:
            [[{ "image": thanthuri, "name": "thanthuri", "rate": 250, "describe": "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven. The dish originated from the Indian subcontinent and is popular in many other parts of the world. It’s a highly consistent product throughout curry houses within the UK and firm favourite." },
            { "image": blood_rost, "name": "blood_rost", "rate": 80, "describe": "Many cultures consume blood as food, often in combination with meat. The blood may be in the form of blood sausage, as a thickener for sauces, a cured salted form for times of food scarcity, or in a blood soup. This is a product from domesticated animals, obtained at a place and time where the blood can run into a container and be swiftly consumed or processed. In many cultures, the animal is slaughtered. In some cultures, blood is a taboo food" }],
[            { "image": chiken, "name": "chiken", "rate": 65, "describe": "Chicken is the most common type of poultry in the world.[1] Owing to the relative ease and low cost of raising chickens—in comparison to mammals such as cattle or hogs—chicken meat (commonly called just chicken) and chicken eggs have become prevalent in numerous cuisines." },
            { "image": egg, "name": "egg", "rate": 40, "describe": "This is a list of egg dishes. Eggs are laid by females of loads of different species, including birds, reptiles, amphibians, and fish, and have been eaten by mankind for thousands of years.[1] Bird and reptile eggs consist of albumen (egg white) and vitellus (egg yolk), contained within many different thin membranes all surrounded by a protective eggshell. " }],
[            { "image": fish, "name": "fish", "rate": 60, "describe": "English does not have a special culinary name for food prepared from these animals, as it does with pig vs. pork, and as does Spanish pescado vs. pez. In culinary and fishery contexts, fish may include shellfish, such as molluscs, crustaceans and echinoderms; more expansively, seafood covers both fish and other marine life used as food" },
            { "image": lalipop, "name": "lalipop", "rate": 80, "describe": "Chicken lollipop is an hors d'oeuvre popular in Indo-Chinese cuisine. Chicken lollipop is, essentially a frenched chicken winglet, wherein the meat is cut loose from the bone end and pushed down creating a lollipop appearance. It is usually served hot with Szechuan sauce" }],
[            { "image": matton, "name": "matton", "rate": 140, "describe": "Lamb is the most expensive of the three types and in recent decades sheep meat is increasingly only retailed as lamb, sometimes stretching the accepted distinctions given above. The stronger-tasting mutton is now hard to find in many areas, despite the efforts of the Mutton Renaissance Campaign in the UK" },
            { "image": matton_soup, "name": "matton_soup", "rate": 50, "describe": "Sup kambing or sop kambing is a Southeast Asian mutton soup, commonly found in Brunei Darussalam, Indonesia, Malaysia, Singapore. It is prepared with goat meat, tomato, celery, spring onion, ginger, candlenut and lime leaf, its broth is yellowish in colour.[1] Sup kambing is quite widespread as numbers of similar goat meat soup recipes can be found throughout Malaysia, Indonesia and Singapore" }],
[            { "image": biriyani, "name": "biriyani", "rate": 90, "describe": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and meat usually that of chicken, goat, lamb, prawn, fish, and sometimes, in addition, eggs or vegetables such as potatoes in certain regional varieties" },
            { "image": non_meals, "name": "meals", "rate": 160, "describe": "This is a list of goat dishes, which use goat meat as a primary ingredient. Goat meat is the meat of the domestic goat (Capra aegagrus hircus). It is often called chevon or mutton when the meat comes from adults, and cabrito, capretto, or kid when from young animals. Worldwide, goat meat is less widely consumed than pork, beef, and poultry" }]],

        chinse: [

[            { "image": bargar, "name": "bargar", "rate": 170, "describe": "A hamburger (or burger for short) is a food, typically considered a sandwich, consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a special sauce, often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger topped with cheese is called a cheeseburger" },
            { "image": fran, "name": "fran", "rate": 120, "describe": "Shrimp curry (Portuguese: caril de camarão, Indonesian: 'gulai udang or kari udang), also known as prawn curry, is a typical curry dish of Burmese cuisine, Indonesian cuisine in Indonesia (Aceh and West Sumatra), Indo-Portuguese cuisine in India (Goa) and Portugal, Mozambican cuisine in Mozambique and Thai cuisine in Thailand (Phuket)." }],
[            { "image": fried_rice, "name": "chikfried_riceen", "rate": 100, "describe": "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish. Fried rice is a popular component of East Asian, Southeast Asian and certain South Asian cuisines, as well as a staple national dish of Indonesia and Malaysia. " },
            { "image": kabab, "name": "kabab", "rate": 120, "describe": "Kebabs consist of cut up or ground meat, sometimes with vegetables, and various other accompaniments according to the specific recipe. Although kebabs are typically cooked on a skewer over a fire, some kebab dishes are baked in a pan in an oven or prepared as a stew such as tas kebab" }],
[            { "image": noodles, "name": "noodles", "rate": 100, "describe": "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles can be refrigerated for short-term storage or dried and stored for future use." },
            { "image": soup, "name": "soup", "rate": 40, "describe": "This is a list of notable Chinese soups. Chinese cuisine includes styles originating from the diverse regions of China, as well as from Chinese people in other parts of the world. Many Chinese soups are noodle-based. By 2000 BCE, wheat had arrived in China from western Asia. These grains were typically served as warm noodle soups instead of baked into bread as in Europe. Chinese noodles are used in the preparation of some Chinese soups." }],
[            { "image": pizza, "name": "pizza", "rate": 350, "describe": "Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is an Italian dish consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven" },
            { "image": tea, "name": "tea", "rate": 20, "describe": "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China and East Asia.[3] After water, it is the most widely consumed drink in the world.[4] There are many different types of tea; " }],
[            { "image": manchuriyan, "name": "manchuriyan", "rate": 60, "describe": "Manchurian is a class of Indo-chinese dishes made by roughly chopping and deep-frying a main ingredient like chicken, cauliflower (gobi), prawns, fish, mutton or paneer and then sautéeing it in a sauce flavored with soy sauce.[1][2] Manchurian is the result of the adaptation of Chinese cooking and seasoning techniques to suit Indian tastes and has become a staple of Indian Chinese cuisine." },
            { "image": meals, "name": "meals", "rate": 110, "describe": "Chinese cuisine is an important part of Chinese culture and includes cuisines originating from the diverse regions of China as well as from Overseas Chinese who have settled in other parts of the world. Because of the Chinese diaspora and historical power of the country, Chinese cuisine has influenced many other cuisines in Asia, with modifications made to cater to local palate" }]]

    }


}

const Selected_order_list = [];
const Details_order = [];
export const OrderReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_ORDER:
            return { ...state, Order: payload };
        default:
            return state;
    }

}

export const Selcted_OrderReducer = (state = Selected_order_list, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_ORDER:
            return [...state, payload];
        default:
            return state;
    }
}
export const Details_Order = (state = Details_order, { type, payload }) => {
    switch (type) {
        case ActionTypes.DETAILS_ORDER:
            return { payload };
        default:
            return state;
    }
}