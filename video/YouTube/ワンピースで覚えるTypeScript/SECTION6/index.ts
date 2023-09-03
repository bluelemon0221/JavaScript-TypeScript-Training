
type Person<S> = {
    name: S;
};



const sanji: Person<string> = {
    name:  "サンジ",
};


type  AbilityPerson<S, N> = {
    name: S;
    age: N;
    devil_fruit: S;
};



const luffy: AbilityPerson<string, number> = {
    name: "ルフィ",
    age: 19,
    devil_fruit: "ゴムゴムの実",
};

type Character = {
    name: string;
};

type Family<Parent extends Character, Child extends Character> = {
    father: Parent;
    child: Child;
};


type Roger = {
    name: string;
};
type Ace = {
    name: string;
    devil_fruit: string;
};

type D = Family<Roger, Ace>;

 
type Chara = string;

type Family1<Parent = Chara, Child = Chara> = {
    father: Parent;
    child: Child;
};

type D1 = Family1<string, string>;
type D2 = Family1;
type D3 = Family1<string>;