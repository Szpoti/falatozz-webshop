import Products from "../components/Products";

export default class ProductService {
  getAllProducts() {
    const products = {
      data: [
        {
          name: "Paradicsom",
          price: "5$",
          imgUrl:
            "https://previews.123rf.com/images/usersam2007/usersam20071112/usersam2007111200005/11645815-single-tomato-vegetable-isolated-on-white-background.jpg",
        },
        {
          name: "Répa",
          price: "3$",
          imgUrl:
            "https://shared1.ad-lister.co.uk/UserImages/7eb3717d-facc-4913-a2f0-28552d58320f/Img/fake_fruit/artificial-single-carrot.jpg",
        },
        {
          name: "Paprika",
          price: "3$",
          imgUrl:
            "https://i.pinimg.com/originals/bb/b9/9f/bbb99fe6641302b1abba6c3489c3e6ac.jpg",
        },
        {
          name: "Karfiol",
          price: "6$",
          imgUrl:
            "https://previews.123rf.com/images/bernjuer/bernjuer0907/bernjuer090700057/5260399-single-cauliflower-vegetable-isolated-on-white.jpg",
        },
        {
          name: "Káposzta",
          price: "3$",
          imgUrl:
            "https://www.pngkey.com/png/detail/251-2517575_fruits-vegetable-single.png",
        },
        {
          name: "Retek",
          price: "1$",
          imgUrl:
            "https://image.shutterstock.com/image-photo/beetroot-foliage-isolated-fresh-beet-260nw-1137495404.jpg",
        },
        {
          name: "Kukorica",
          price: "3$",
          imgUrl:
            "https://www.pngitem.com/pimgs/m/74-742813_single-fruits-and-vegetables-hd-png-download.png",
        },
        {
          name: "Kígyóuborka",
          price: "4$",
          imgUrl:
            "https://t4.ftcdn.net/jpg/02/66/68/37/360_F_266683754_wzx9XxeNXKudct2Q3qwQf1PvVaQaKOf6.jpg",
        },
        {
          name: "Padlizsán",
          price: "4$",
          imgUrl:
            "https://www.fruitnvegiesrus.com.au/wp-content/uploads/2018/08/eggplant.jpg",
        },
        {
          name: "Édesburgonya",
          price: "7$",
          imgUrl:
            "https://www.sillisprepveg.ie/wp-content/uploads/2020/04/sweet-potato.jpg",
        },
      ],
    };

    //Async API call should be here
    return products.data;
  }
}
