import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";
import type { Photo } from "../contexts/photos/models/photo";

export default function PageHome() {
    return (
        <Container>
            <div className="grid grid-cols-5 gap-9">
                <PhotoWidget
                photo={{
                    id: '123',
                    title: 'Olá mundo',
                    imageId: "portrait-tower.png",
                    albums: [
                        {id: '123', title: 'Album 1'},
                        {id: '321', title: 'Album 2'},
                        {id: '213', title: 'Album 3'},
                        {id: '312', title: 'Album 4'}
                    ]
                }}/>
                <PhotoWidget
                photo={{
                    id: '456',
                    title: 'Olá mundo',
                    imageId: "portrait-tower.png",
                    albums: [
                        {id: '123', title: 'Album 1'},
                        {id: '321', title: 'Album 2'},
                        {id: '213', title: 'Album 3'},
                        {id: '312', title: 'Album 4'}
                    ]
                }}/>
                <PhotoWidget
                photo={{
                    id: 'abc',
                    title: 'Olá mundo',
                    imageId: "portrait-tower.png",
                    albums: [
                        {id: '123', title: 'Album 1'},
                        {id: '321', title: 'Album 2'},
                        {id: '213', title: 'Album 3'},
                        {id: '312', title: 'Album 4'}
                    ]
                }}
                />
                <PhotoWidget
                photo={{
                    id: 'abc',
                    title: 'Olá mundo',
                    imageId: "portrait-tower.png",
                    albums: [
                        {id: '123', title: 'Album 1'},
                        {id: '321', title: 'Album 2'},
                        {id: '213', title: 'Album 3'},
                        {id: '312', title: 'Album 4'}
                    ]
                }}
                />
                
                <PhotoWidget
                photo={{} as Photo} loading/>
            </div>
        </Container>
    )
}
