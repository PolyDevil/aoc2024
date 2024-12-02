class Params {
  static year = 2024 as const;
  static days = [1] as const;

  constructor(public day: (typeof Params)["days"][number]) {}
}

class FetchableResource {
  constructor(
    public URI: `https://adventofcode.com/${typeof Params.year}/day/${Params["day"]}/input`
  ) {}

  static make(day: Params["day"]): FetchableResource["URI"] {
    return `https://adventofcode.com/${Params.year}/day/${day}/input`;
  }
}

class Input {
  static read(day: Params["day"]) {
    const headers = new Headers({
      Cookie: `session=${Deno.env.get("SESSION_KEY")}`,
    });

    return fetch(FetchableResource.make(day), {
      headers,
    }).then((response) => response.text());
  }
}

export type day = Params["day"];

export default Input;
