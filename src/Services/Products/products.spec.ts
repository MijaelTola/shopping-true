import {renderHook, waitFor, act} from "@testing-library/react";
import {useProductsList} from "./products";

describe('Products Services', () => {
    const { result } = renderHook(() => useProductsList())
    it('should get data from json', async () => {
        await waitFor(async () => {
            expect(await result.current.getProductsList()).toHaveLength(11);
        })
    })
})
