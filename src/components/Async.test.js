import Async from "./Async";
import { render, screen } from "@testing-library/react";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{id: 'p1', title: 'First post'}]
    }); // dzięki temu mamy juz dostęp to metody json. patrz linijka 8 w Async.js
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem"); // find.... zwraca promise. użyte jest tutaj, ze względu, że na początku nie wczytają się posty, bo test się wykona zanim request skończy. Find poczeka na request az będzie wykonany. Jako 3 argument można np. ustawic timeout: screen.findAllByRole("listitem", {excat: true}, {timeout: 1000}). Timeout defaultowo jest 1s. Jeśi elementy nie są znalezione po 1 sekundzie, to mozna to zwiększyć
    expect(listItemElements).not.toHaveLength(0);
  });
});
