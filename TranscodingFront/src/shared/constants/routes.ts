enum ERoutesBase {
    Main = '',
    Player = 'player'
};


export const MainRoutes = {
    route: ERoutesBase.Main,
    slashedRoute: `/${ERoutesBase.Main}/`,
};

export const PlayerRoutes = {
    route: ERoutesBase.Player,
    slashedRoute: `/${ERoutesBase.Player}/`,
};