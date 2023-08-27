import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import {Loader} from "@/shared/ui/loader/loader";


interface PageLoaderProps{
    className?:string
}

const PageLoader = (props: PageLoaderProps) => {
    const {className} = props
    return (
        <div className={classNames(styles.PageLoader,{},[className])}>
            <Loader/>
        </div>
    );
};

export default PageLoader;