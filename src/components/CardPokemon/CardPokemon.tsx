import { Card, Grid, Row, Text } from "@nextui-org/react"
import { useRouter } from "next/router";
import { FC } from "react"
import { CardPokemonInterface } from "../../../models/ComponentsModel"

export const CardPokemon: FC<CardPokemonInterface> = ({ pokemon }) => {
    const router = useRouter();
    const changePokemon = (idPokemon: string) => {
        router.push(`/pokemon/${idPokemon}`)
    };
    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card onClick={()=>changePokemon(pokemon.id?pokemon.id:'')} isHoverable isPressable>
                <Card.Body>
                    <Card.Image
                        width="100%"
                        height={140}
                        src={pokemon.img ? pokemon.img : ''}
                        alt={pokemon.name} />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between' >
                        <Text>{pokemon.id}</Text>
                        <Text transform='capitalize' >{pokemon.name}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
