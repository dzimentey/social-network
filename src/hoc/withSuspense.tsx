import React from "react";

export const withSuspense = (Component: any) => {

    return (props: any) => <React.Suspense fallback={'Loading...'}> <Component {...props}/> </React.Suspense>

}