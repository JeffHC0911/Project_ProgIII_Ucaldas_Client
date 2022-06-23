import React from "react";
import Card from "../Admin/Card"

export default function Editor() {
    const imageOne = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"

    const contentCards = [
        {
            title: "Moda",
            description: "Modelaje del siglo XXI.",
            image: imageOne,
        },
        {
            title: "Moda II",
            description: "La moda evoluciona ",
            image: imageOne,
        },
        {
            title: "Moda II",
            description: "La moda fresca",
            image: imageOne,
        },
        {
            title: "Moda II",
            description: "La moda fresca",
            image: imageOne,
        },
    ];
    return (
        <div className="card">
            {contentCards.map((card, index) => (
                <Card key={index}>
                    {{
                        title: card.title,
                        description: card.description,
                        image: card.image
                    }}
                </Card>
            ))}
        </div>
    );
}