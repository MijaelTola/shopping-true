import {renderHook, waitFor, act} from "@testing-library/react";
import {useCategoryList} from "./category";

describe('Category container service', () => {
    const { result } = renderHook(() => useCategoryList());

    it('should get category list from json', async () => {

        await waitFor(async () => {
            expect(await result.current.getCategoryList()).toHaveLength(3);
        })
    })
})
