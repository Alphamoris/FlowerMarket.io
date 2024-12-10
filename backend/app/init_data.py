from datetime import date,time
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import price , types

price_data = [
    [1, date(2024, 12, 7), time(9, 30), "Blooming Petals", "Red Roses", "Premium Hand-Selected Red Roses Perfect for Romance and Special Occasions", "Our exquisite red roses are carefully cultivated in temperature-controlled greenhouses, ensuring year-round freshness and vibrant color. Each stem is hand-selected by our expert florists, featuring large, velvety petals and rich fragrance. These roses are perfect for expressing deep love and passion.", 4, 12, "Premium Florist", 8, 75, "Manhattan"],
    [2, date(2024, 12, 7), time(10, 15), "Garden Fresh", "Sunflowers", "Bright Yellow Sunflowers with Strong Stems and Large Blooming Heads", "These magnificent sunflowers are farm-fresh and locally grown, featuring impressive 6-inch flower heads and sturdy green stems. Each flower is carefully nurtured to ensure maximum freshness and longevity, bringing warmth and cheerfulness to any space they occupy.", 5, 15, "Local Farmer", 10, 45, "Brooklyn"],
    [3, date(2024, 12, 7), time(11, 0), "Flora Paradise", "Tulips Mix", "Spring Collection of Rainbow Tulips with Guaranteed Fresh Delivery", "Our rainbow tulip collection features a stunning array of colors including pink, purple, yellow, and white varieties. Each bulb is imported from the Netherlands and grown in optimal conditions. These tulips open gradually, providing a long-lasting display of spring beauty.", 4, 20, "Wholesaler", 15, 60, "Queens"],
    [4, date(2024, 12, 7), time(11, 45), "Orchid Haven", "Phalaenopsis Orchids", "Premium White Orchids Perfect for Home and Office Decoration", "These elegant Phalaenopsis orchids are grown in specialized nurseries under precise conditions. Each plant features multiple flowering stems with 8-12 pristine white blooms. The flowers last for months with proper care, making them an excellent long-term investment in beauty.", 5, 18, "Specialist Grower", 7, 95, "Staten Island"],
    [5, date(2024, 12, 7), time(12, 30), "Lily Valley", "Oriental Lilies", "Fragrant Oriental Lilies with Multiple Buds per Stem", "These spectacular Oriental lilies are known for their intoxicating fragrance and impressive size. Each stem carries 4-6 buds that open sequentially, providing weeks of blooming beauty. The flowers feature speckled petals and prominent stamens, perfect for dramatic floral arrangements.", 4, 25, "Farmer", 12, 85, "Bronx"],
    [6, date(2024, 12, 7), time(13, 0), "Petal Power", "Carnations", "Fresh Multi-Colored Carnations Perfect for Every Celebration and Occasion", "Our carnation collection offers a vibrant mix of colors that last up to three weeks. Each stem is carefully selected for quality and longevity. These hardy flowers are perfect for both professional arrangements and home displays, bringing joy and color to any setting.", 4, 30, "Wholesaler", 20, 40, "Manhattan"],
    [7, date(2024, 12, 7), time(13, 45), "Green Thumb", "Chrysanthemums", "Seasonal Chrysanthemums with Rich Colors and Full Blooms", "These show-stopping chrysanthemums are grown locally with attention to detail. Each plant produces multiple blooms in rich autumn colors. Perfect for both indoor and outdoor decoration, these hardy plants provide weeks of colorful display and require minimal maintenance.", 5, 22, "Local Farmer", 15, 55, "Brooklyn"],
    [8, date(2024, 12, 7), time(14, 30), "Flower Power", "Gerbera Daisies", "Bright and Cheerful Gerbera Daisies in Rainbow Colors", "Our Gerbera collection features large, daisy-like flowers in vibrant colors. Each stem is carefully grown to produce bold, eye-catching blooms that last for weeks. These flowers are perfect for bringing a pop of color and happiness to any room.", 4, 16, "Farmer", 25, 35, "Queens"],
    [9, date(2024, 12, 7), time(15, 15), "Rose Garden", "Pink Roses", "Premium Pink Roses with Delicate Fragrance and Perfect Form", "These exquisite pink roses are cultivated with care to achieve the perfect blend of color and fragrance. Each bloom opens to reveal layers of soft petals with a subtle sweet scent. Ideal for romantic gestures and special celebrations.", 5, 28, "Premium Florist", 18, 80, "Staten Island"],
    [10, date(2024, 12, 7), time(16, 0), "Exotic Blooms", "Bird of Paradise", "Tropical Bird of Paradise with Dramatic Orange and Blue Flowers", "These stunning Bird of Paradise plants are imported from tropical regions. Each stem features the distinctive bird-like flower head in brilliant orange and blue. Perfect for making a bold statement in modern interior spaces.", 4, 14, "Specialist Grower", 5, 120, "Bronx"],
    [11, date(2024, 12, 7), time(16, 45), "Fresh Picks", "Hydrangeas", "Large Blue Hydrangeas with Full, Round Blooms", "Our hydrangeas are grown in specially prepared soil to achieve their stunning blue color. Each stem produces a massive flower head composed of hundreds of tiny blooms. These flowers make an impressive display in both fresh and dried arrangements.", 4, 19, "Local Farmer", 10, 65, "Manhattan"],
    [12, date(2024, 12, 7), time(17, 30), "Floral Elegance", "Calla Lilies", "Elegant White Calla Lilies for Sophisticated Arrangements", "These pristine white Calla Lilies are grown in controlled environments to achieve perfect form. Each stem features a single, sculptural bloom that adds elegance to any arrangement. Perfect for weddings and formal events.", 5, 24, "Premium Florist", 15, 90, "Brooklyn"],
    [13, date(2024, 12, 7), time(18, 15), "Garden Magic", "Peonies", "Luxurious Pink Peonies with Full, Fragrant Blooms", "Our peonies are carefully nurtured to produce large, luxuriant blooms with dozens of petals. Each flower opens to reveal layers of soft pink petals with a sweet, romantic fragrance. These seasonal favorites are perfect for special occasions.", 5, 32, "Specialist Grower", 8, 110, "Queens"],
    [14, date(2024, 12, 7), time(19, 0), "Bloom Box", "Dahlia Mix", "Spectacular Mixed Dahlias with Various Colors and Forms", "This collection features a stunning variety of dahlia types, from dinner plate to pompom forms. Each bloom is a masterpiece of color and structure. These flowers are perfect for creating dramatic arrangements and garden displays.", 4, 21, "Farmer", 12, 75, "Staten Island"],
    [15, date(2024, 12, 7), time(19, 45), "Nature's Best", "Wildflower Mix", "Fresh Seasonal Wildflower Bouquet with Native Species", "Our wildflower bouquets feature a changing selection of locally grown flowers. Each bunch includes a variety of textures and colors, creating a naturalistic display. Perfect for bringing a touch of the meadow indoors.", 4, 17, "Local Farmer", 20, 45, "Bronx"],
    [16, date(2024, 12, 7), time(20, 30), "Lotus Garden", "Lotus Flowers", "Sacred Lotus Flowers with Pink Petals and Yellow Centers", "These remarkable lotus flowers are grown in our specialized aquatic facility. Each bloom opens in the morning to reveal perfect pink petals surrounding a golden center. These flowers symbolize purity and enlightenment.", 5, 11, "Specialist Grower", 5, 150, "Manhattan"],
    [17, date(2024, 12, 7), time(21, 15), "Iris Fields", "Dutch Iris", "Classic Dutch Iris in Deep Blue and Purple Shades", "Our Dutch Iris collection features tall, elegant stems with sophisticated blooms. Each flower displays intricate patterns of blue and purple with golden accents. Perfect for adding height and structure to arrangements.", 4, 15, "Wholesaler", 15, 55, "Brooklyn"],
    [18, date(2024, 12, 7), time(22, 0), "Desert Bloom", "Succulents", "Varied Succulent Collection Perfect for Modern Decor", "This carefully curated collection of succulents includes various shapes and colors. Each plant is chosen for its unique form and easy care requirements. Perfect for creating long-lasting indoor gardens and terrariums.", 5, 27, "Specialist Grower", 30, 40, "Queens"],
    [19, date(2024, 12, 7), time(22, 45), "Tropical Paradise", "Anthurium", "Glossy Red Anthuriums with Heart-Shaped Flowers", "These tropical beauties feature glossy, heart-shaped flowers in brilliant red. Each plant produces multiple blooms throughout the year. Perfect for adding exotic touch to modern interiors and offices.", 4, 13, "Premium Florist", 10, 85, "Staten Island"],
    [20, date(2024, 12, 7), time(23, 30), "Morning Glory", "Ranunculus", "Delicate Ranunculus with Layer upon Layer of Petals", "Our ranunculus flowers are grown from premium bulbs to produce extraordinary blooms. Each stem carries multiple buds that open to reveal countless layers of delicate petals. These romantic flowers are perfect for bouquets and centerpieces.", 5, 23, "Farmer", 15, 70, "Bronx"]
]

flower_types = [
    [1, "Rose"],
    [2, "Lily"],
    [3, "Tulip"],
    [4, "Sunflower"],
    [5, "Orchid"],
    [6, "Carnation"],
    [7, "Daisy"],
    [8, "Gerbera"],
    [9, "Jasmine"],
    [10, "Lavender"]
]


def create_price(session: Session, price_info: dict) -> None:
    price_obj = price(**price_info)
    session.add(price_obj)
    try:
        session.commit()
    except Exception as e:
        session.rollback()
        print(f"Error creating price object: {e}")


def create_type(session: Session, type_info: dict) -> None:
    type_obj = types(**type_info)  # Use the correct model name
    session.add(type_obj)
    try:
        session.commit()
    except Exception as e:
        session.rollback()
        print(f"Error creating type object: {e}")


def populate_database(session: Session, price_data: list[list], flower_types_list: list[list]) -> None:
    for item in price_data:
        price_info = {
            "id": item[0],
            "date": item[1],
            "time": item[2],
            "shop_name": item[3],
            "flowname": item[4],
            "main_description": item[5],
            "long_description": item[6],
            "rating": item[7],
            "no_of_reviews": item[8],
            "seller_type": item[9],
            "availability": item[10],
            "price": item[11],
            "place": item[12]
        }
        create_price(session, price_info)
    for item in flower_types_list:
        type_info = {
            "id": item[0],
            "fname": item[1]
        }
        create_type(session, type_info)


if __name__ == "__main__":
    db = next(get_db())
    populate_database(db, price_data, flower_types)