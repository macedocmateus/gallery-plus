import { useForm } from "react-hook-form"
import Alert from "../../../components/alert"
import Button from "../../../components/button"
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog"
import ImagePreview from "../../../components/image-preview"
import InputSingleFile from "../../../components/input-single-file"
import InputText from "../../../components/input-text"
import Skeleton from "../../../components/skeleton"
import Text from "../../../components/text"
import type { Album } from "../../albums/models/album"


interface PhotoNewDialogProps {
    trigger: React.ReactNode
}

export default function PhotoNewDialog({trigger}: PhotoNewDialogProps) {
    const form = useForm()
    
    // TODO: Dados apenas de exemplo, em breve vamos consumir da API
    const isLoadingAlbum = false
    const albums: Album[] = [
        {id: '123', title: 'Album 1'},
        {id: '321', title: 'Album 2'},
        {id: '213', title: 'Album 3'},
        {id: '312', title: 'Album 4'}
    ]
    
    return (
    <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
            <DialogHeader>Adicionar foto</DialogHeader>

            <DialogBody className="flex flex-col gap-5">
                <InputText 
                placeholder="Adicione um título"
                maxLength={255}
                />

                <Alert>
                    Tamanho máximo: 50MB
                    <br />
                    Você pode selecionar arquivo em PNG, JPG ou JPEG
                </Alert>

                <InputSingleFile
                    form={form}
                    allowedExtensions={['png', 'jpg', 'jpeg']}
                    maxFileSizeInMB={50}
                    replaceBy={<ImagePreview
                    className="w-full h-56"
                    />
                }
                />

                <div className="space-y-3">
                    <Text variant="label-small">Selecionar álbuns</Text>

                    <div className="flex flex-wrap gap-3">
                        {!isLoadingAlbum && albums.length > 0 && albums.map(album => 
                        <Button 
                            key={album.id}
                            variant="ghost"
                            size="sm"
                            className="truncate"
                        >
                            {album.title}
                        </Button>
                    )}

                        {isLoadingAlbum && Array.from({length: 5}).map((_, index) => 
                        <Skeleton className="w-20 h-7" key={`album-loading-${index}`}/>
                        )}
                    </div>
                </div>
            </DialogBody>

            <DialogFooter>
                <DialogClose>
                    <Button variant="secondary">Cancelar</Button>
                </DialogClose>

                <Button>Adicionar</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
