import Container from "../components/container";
import PhotosList from "../contexts/photos/components/photo-list";

export default function PageHome() {
    return (
        <Container>
            <PhotosList photos={[
                 { id: '123',
                        title: 'Olá mundo',
                        imageId: "portrait-tower.png",
                        albums: [
                            {id: '123', title: 'Album 1'},
                            {id: '321', title: 'Album 2'},
                            {id: '213', title: 'Album 3'},
                            {id: '312', title: 'Album 4'}
                        ]
                },
                { id: '321',
                        title: 'Olá mundo',
                        imageId: "portrait-tower.png",
                        albums: [
                            {id: '123', title: 'Album 1'},
                            {id: '321', title: 'Album 2'},
                            {id: '213', title: 'Album 3'},
                            {id: '312', title: 'Album 4'}
                        ]
                }
            ]}/>      
        </Container>
    )
}
