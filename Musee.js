import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
const Musee = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://musee-parfum-paris.fragonard.com/wp-content/uploads/2016/12/header-visite-1.jpg",
            }}
            style={{
              width: "100%",
              height: 300,
              resizeMode: "cover",
              borderRadius: 10,
            }}
          />
          <Text
            style={{
              fontSize: 32,
              fontFamily: "Josefin_sans",
              color: "#2B2B2B",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Le Musée
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Josefin_sans",
              color: "#848484",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            Entrée et visite guidée gratuite.
          </Text>
          <Text style={{ marginTop: 20, fontSize: 18 }}>
            A deux pas de l’Opéra Garnier, au cœur de Paris, le Musée du Parfum
            propose un concept muséal unique et expose de manière didactique et
            originale toutes les étapes qui donnent vie à ce mythique objet de
            luxe et de notre quotidien : le parfum. La Parfumerie Fragonard
            présente ainsi tous les secrets de fabrication : matières premières,
            cueillette, extraction, distillation, formulation,
            industrialisation, flaconnage et bien sûr le processus de création
            et le métier de nez. Puis, dans la deuxième partie du musée, une
            collection de flacons anciens exceptionnelle retrace l’histoire du
            parfum de l’Egypte ancienne au XXe siècle : pots à khôls, pomanders,
            vinaigrettes, brûle-parfums, pots-pourris, coffrets de voyage,
            flacons à sels, flacons précieux…
          </Text>
        </View>
        <View style={{ backgroundColor: "#2b2b2B", padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Image
              source={{
                uri: "https://musee-parfum-paris.fragonard.com/wp-content/themes/fragonard/img/pages/musee/ico-esprit.png",
              }}
              style={{ width: "15%", height: 100, resizeMode: "contain" }}
            />
            <Text style={{ color: "white" }}>L’ESPRIT DU LIEU</Text>
          </View>
          <Text style={{ color: "white", fontSize: 18 }}>
            Le Musée du Parfum, situé 9 rue Scribe, fut le premier à voir le
            jour à Paris, en 1983. Après de longs mois de travaux de rénovation
            et d’agrandissement, il accueille à présent une collection enrichie
            de nombreuses acquisitions réalisées récemment par Françoise Costa.
            Insolites, rares et précieux, ces nouveaux objets d’art viennent
            s’ajouter à un ensemble déjà très complet, comprenant également des
            objets de curiosité, tels qu’une civette, un trébuchet ou encore des
            objets de production et d’extraction des plantes à parfum. Parfumeur
            grassois depuis 1926, Fragonard partage avec ses visiteurs son
            savoir-faire séculaire et son patrimoine unique pour raconter
            l’histoire du parfum de ses origines à nos jours.
          </Text>
          <Image
            source={{
              uri: "https://musee-parfum-paris.fragonard.com/wp-content/uploads/2020/07/esprit_lieu.jpg",
            }}
            style={{ width: "100%", height: 300, marginTop: 20 }}
          />
        </View>

        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://musee-parfum-paris.fragonard.com/wp-content/uploads/2017/07/nez.jpg",
            }}
            style={{ width: "100%", height: 300, marginTop: 20 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image
              source={{
                uri: "https://musee-parfum-paris.fragonard.com/wp-content/themes/fragonard/img/pages/musee/ico-nez.png",
              }}
              style={{ width: "15%", height: 100, resizeMode: "contain" }}
            />
            <Text>LE NEZ</Text>
          </View>

          <Text style={{ fontSize: 18 }}>
            Magicien, artiste, chimiste, le parfumeur fait appel à l’ensemble de
            ses talents pour composer un parfum. Il possède un savoir-faire
            unique et développe sa propre signature olfactive. Souvent comparé à
            une œuvre d’art, la création d’un parfum nécessite des mois, parfois
            des années. Créateur par essence, tout l’art du nez est de savoir
            innover, humer et retranscrire l’air du temps.
          </Text>

          <Image
            source={{
              uri: "https://musee-parfum-paris.fragonard.com/wp-content/uploads/2020/07/salle_olfaction.jpg",
            }}
            style={{ width: "100%", height: 300, marginTop: 50 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
            <Image
              source={{
                uri: "https://musee-parfum-paris.fragonard.com/wp-content/themes/fragonard/img/pages/musee/ico-salle-olfaction.png",
              }}
              style={{ width: "15%", height: 100, resizeMode: "contain" }}
            />
            <Text>LA SALLE D’OLFACTION</Text>
          </View>

          <Text style={{ fontSize: 18 }}>
            Dédiée aux expositions temporaires et à notre fleur de l’année, cet
            espace propose au visiteur de se prêter au jeu de l’olfaction et
            d’affiner son odorat. Testez votre nez !
          </Text>

          <Text
            style={{
              fontSize: 24,
              fontFamily: "Josefin_sans",
              color: "#2B2B2B",
              marginTop: 50,
              textAlign: "center",
            }}
          >
            ACCÈS & INFOS PRATIQUES
          </Text>

          <Image
            source={{
              uri: "https://musee-parfum-paris.fragonard.com/wp-content/themes/fragonard/img/plan-musee-du-parfum.png",
            }}
            style={{ width: "100%", height: 300, marginTop: 50 }}
          />

          <View style={{ backgroundColor: "#c8a675", padding: 20 }}>
            <Text style={{ textAlign: "center" }}>
              MUSÉE DU PARFUM FRAGONARD
            </Text>
            <Text style={{ marginTop: 20, color: "white" }}>
              Accueil au 9 rue Scribe – 75009 Paris
            </Text>
            <Text style={{ color: "white" }}>lundi 09:00 – 17:30</Text>
            <Text style={{ color: "white" }}>mardi 09:00 – 17:30</Text>
            <Text style={{ color: "white" }}>mercredi 09:00 – 17:30</Text>
            <Text style={{ color: "white" }}>jeudi 09:00 – 17:30</Text>
            <Text style={{ color: "white" }}>vendredi 09:00 – 17:30</Text>
            <Text style={{ color: "white" }}>samedi 09:00 – 17:30</Text>
            <Text style={{ color: "white" }}>dimanche 09:00 – 17:00</Text>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Entrée gratuite
            </Text>

            <Text style={{ marginTop: 30, textAlign: "center" }}>ACCÈS</Text>
            <Text style={{ marginTop: 20, color: "white" }}>
              Métros Opéra (lignes 3, 7, 8), Madeleine (12, 14), Havre-Caumartin
              (9), Saint-Lazare (13), RER A Auber, RER E Haussmann Saint-Lazare,
              Bus – 21, 22, 27, 52, 53, 66, 68, 81, 95
            </Text>

            <Text style={{ marginTop: 30, textAlign: "center" }}>CONTACT</Text>
            <Text style={{ marginTop: 20, color: "white" }}>
              Tél. : +33 1 47 42 04 56
            </Text>
            <Text style={{ color: "white" }}>
              Email : tourisme@fragonard.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Musee;
