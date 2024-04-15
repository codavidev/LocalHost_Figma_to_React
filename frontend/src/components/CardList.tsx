import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ListingItem from "./ListingItem";
import styles from "./CardList.module.css";

type CardStateType = Array<{
  listingImage: string;
  listingTitle: string;
  listingSubtitle: string;
  rating: number;
  price: string;
}>;

const CardList: React.FC<{ showAll: boolean }> = ({ showAll }) => {
  const navigate = useNavigate();
  
  const [cardState, setCardState] = useState<CardStateType>([
    {
      listingImage: "http://localhost:3000/listing-image@2x.png",
      listingTitle: "Brightwoods Cabin",
      listingSubtitle: "Bridlepath, Ontario, Canada",
      rating: 4.9,
      price: "$658",
    },
    {
      listingImage: "http://localhost:3000/image1@2x.png",
      listingTitle: "Urban Loft",
      listingSubtitle: "Georgina Bay, Ontario, Canada",
      rating: 4.5,
      price: "$410",
    },
    {
      listingImage: "http://localhost:3000/image-1@2x.png",
      listingTitle: "Forestville Cottages",
      listingSubtitle: "Simcoe, Ontario Canada",
      rating: 5,
      price: "$325",
    },
    {
      listingImage: "http://localhost:3000/image-2@2x.png",
      listingTitle: "Unionville Logde",
      listingSubtitle: "Markham, Ontario Canada",
      rating: 4.6,
      price: "$485",
    },
    {
      listingImage: "http://localhost:3000/image-3@2x.png",
      listingTitle: "Missisuaga Aistream",
      listingSubtitle: "Missisauga, Ontario, Canada",
      rating: 4.8,
      price: "$502",
    },
    {
      listingImage: "http://localhost:3000/image-4@2x.png",
      listingTitle: "Niagara Homes",
      listingSubtitle: "Niagara, Ontario, Canada",
      rating: 4.9,
      price: "$655",
    },
    {
      listingImage: "http://localhost:3000/image-5@2x.png",
      listingTitle: "Sunny Estate",
      listingSubtitle: "Barcort, Ontario Canada",
      rating: 5,
      price: "$320",
    },
    {
      listingImage: "http://localhost:3000/image-6@2x.png",
      listingTitle: "Lawrence Hills",
      listingSubtitle: "Lawrence, Ontario Canada",
      rating: 5,
      price: "$350",
    },
    {
      listingImage: "http://localhost:3000/image-7@2x.png",
      listingTitle: "Simcoe Lake Lodge",
      listingSubtitle: "Simcoe, Ontario, Canada",
      rating: 5,
      price: "$395",
    },
    {
      listingImage: "http://localhost:3000/image-8@2x.png",
      listingTitle: "Wasaga Beach Home",
      listingSubtitle: "Georgina Bay, Ontario, Canada",
      rating: 5,
      price: "$385",
    },
    {
      listingImage: "http://localhost:3000/image-9@2x.png",
      listingTitle: "Banff Hills",
      listingSubtitle: "Banff, Alberta, Canada",
      rating: 5,
      price: "$385",
    },
    {
      listingImage: "http://localhost:3000/image-10@2x.png",
      listingTitle: "Creemore Canada",
      listingSubtitle: "Creemore, Alberta, Canada",
      rating: 5,
      price: "$385",
    },
    {
      listingImage: "http://localhost:3000/image-11@2x.png",
      listingTitle: "Kawartha Lakes",
      listingSubtitle: "Kawartha, Alberta,  Canada",
      rating: 5,
      price: "$385",
    },
    {
      listingImage: "http://localhost:3000/image-12@2x.png",
      listingTitle: "Revelstoke Cabin",
      listingSubtitle: "Revelstoke, Alberta, Canada",
      rating: 5,
      price: "$385",
    },
    {
      listingImage: "http://localhost:3000/image-13@2x.png",
      listingTitle: "Brightwoods Estate",
      listingSubtitle: "Brightwoods Estate",
      rating: 5,
      price: "$385",
    },
    {
      listingImage: "http://localhost:3000/image-14@2x.png",
      listingTitle: "Brightwoods Estate",
      listingSubtitle: "Brightwoods Estate",
      rating: 5,
      price: "$385",
    },
  ]);

  const onListingItemContainerClick = useCallback(() => {
    navigate("/property-details");
  }, [navigate]);

  const croppedCardState = showAll ? cardState : cardState.slice(0, 12)

  return (
    <section className={styles.homes}>
      {croppedCardState.map((item, index) => (
        <ListingItem
          key={index}
          listingImage={item.listingImage}
          listingTitle={item.listingTitle}
          listingSubtitle={item.listingSubtitle}
          rating={item.rating}
          price={item.price}
          onListingItemContainerClick={onListingItemContainerClick}
        />
      ))}
    </section>
  );
};

export default CardList;
