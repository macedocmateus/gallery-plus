import Button from "../../../components/button"
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text"
import type {Album} from "../models/album"
import  cx  from 'classnames';

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
    albums: Album[]
    loading?: boolean
}

export default function AlbumsFilter({albums, loading, className, ...props}: AlbumsFilterProps) {

    return (
        <div className={cx("flex items-center gap-3.5 overflow-x-auto", className)} {...props}>
            <Text variant="heading-small">Álbuns</Text>
            <div className="flex gap-3">
                {!loading ? (
                <>
                  <Button variant="primary" size="sm" className="cursor-pointer">
                    Todos
                  </Button>
                
                  {albums.map((album) => (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="cursor-pointer" 
                    key={album.id}
                  >
                    {album.title}
                </Button>
             ))}
            </>
            ) : (
                Array.from({length: 5}).map((_, index) => (
                <Skeleton 
                className="w-28 h-7"
                key={`album-button-loading-${index}`}
                />
                ))
            )}
            </div>
        </div>
    )
}
