export function handleData(dispatch, data, type) {
    dispatch({
        type: type,
        item: data,
    });
}

export function handleErrorData(dispatch, err, type) {
    dispatch({
        type: type,
        err,
    })
}

/**
 * 初始化 state
 */
export const initState = {}
