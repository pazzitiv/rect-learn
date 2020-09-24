import React, {Suspense, Fragment} from 'react';

type Props = {
    code: string;
    [key: string]: any;
}

const loadModule = (moduleCode: string) => {
    return React.lazy(() => import(`../../modules/${moduleCode}/`))
}

const checkPermission = () => {
    return true
}

export default function Modules(props: Props) {
    if (checkPermission()) {
        const Component = loadModule(props.code)
        return (
            <Fragment key={props.code + '-module'}>
                <Suspense fallback={<>Загрузка...</>}>
                    <Component {...props} />
                </Suspense>
            </Fragment>
        )
    }

    return null;
}
