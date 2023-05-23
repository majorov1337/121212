"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4463, 3402], {
    194: function(e, t, n) {
        var r, o;
        n.d(t, {
            S: function() {
                return a
            }
        }),
        (o = r || (r = {})).ONRAMP = "onramp",
        o.OFFRAMP = "offramp";
        let a = new class {
            constructor() {
                this.getTokenAmountInUSD = (e,t)=>{
                    var n;
                    return (parseFloat(null != e ? e : "0") * parseFloat(null !== (n = null == t ? void 0 : t.usdValue) && void 0 !== n ? n : "0")).toFixed(2)
                }
                ,
                this.filterTokenByName = function(e) {
                    let {name: t, symbol: n} = e
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return t.toLowerCase().includes(null == r ? void 0 : r.toLowerCase()) || n.toLowerCase().includes(r.toLowerCase())
                }
                ,
                this.filterTokenByNetwork = (e,t)=>null == t || t === e,
                this.filterTokenByStatus = (e,t)=>null == t || t === e,
                this.filterTokenByRampProvider = (e,t)=>{
                    var n, o;
                    return null == t || t === r.OFFRAMP && (null === (n = e.rampProviders) || void 0 === n ? void 0 : n.some(e=>e.allowsSellingToken)) || t === r.ONRAMP && (null === (o = e.rampProviders) || void 0 === o ? void 0 : o.some(e=>e.allowsBuyingToken))
                }
            }
        }
    },
    38138: function(e, t, n) {
        var r, o;
        n.d(t, {
            R: function() {
                return r
            }
        }),
        (o = r || (r = {})).UNISWAP_V2 = "UNISWAP_V2",
        o.UNISWAP_V3 = "UNISWAP_V3",
        o.ERC_20 = "ERC_20",
        o.ERC_721 = "ERC_721",
        o.ERC_1155 = "ERC_1155",
        o.NATIVE = "NATIVE",
        o.OPENSEA = "OPENSEA",
        o.LOOKSRARE = "LOOKSRARE",
        o.GEMSWAP = "GEMSWAP",
        o.FLOOZ_MULTICHAIN_ROUTER = "FLOOZ_MULTICHAIN_ROUTER",
        o.UNKNOWN = "UNKNOWN"
    },
    17367: function(e, t, n) {
        var r, o;
        n.d(t, {
            f: function() {
                return r
            }
        }),
        (o = r || (r = {})).LOW = "LOW",
        o.MEDIUM = "MEDIUM",
        o.HIGH = "HIGH"
    },
    75877: function(e, t, n) {
        n.d(t, {
            F: function() {
                return i
            }
        });
        var r = n(36492)
          , o = n(78010)
          , a = n(6916);
        let i = (e,t)=>(0,
        r.a)(o.a.swapQuote(e), ()=>a.J.getSwapQuote(e), t)
    },
    78010: function(e, t, n) {
        var r, o;
        n.d(t, {
            a: function() {
                return a
            }
        }),
        (o = r || (r = {})).ALLOWANCE_APPROVAL = "TRADE_FLOOZ_API_ALLOWANCE_APPROVAL",
        o.CREATE = "TRADE_FLOOZ_API_CREATE",
        o.SWAP_QUOTE = "TRADE_FLOOZ_API_SWAP_QUOTE",
        o.CREATE_SWAP_TRANSACTION = "TRADE_FLOOZ_API_CREATE_SWAP_TRANSACTION",
        o.CREATE_STAKE_TRANSACTION = "TRADE_FLOOZ_API_CREATE_STAKE_TRANSACTION",
        o.GAS_PRICES = "TRADE_FLOOZ_API_GAS_PRICES",
        o.STAKE_INFO = "TRADE_FLOOZ_API_STAKE_INFO";
        let a = {
            allowanceApproval: e=>[r.ALLOWANCE_APPROVAL, e],
            create: e=>[r.CREATE, e],
            swapQuote: e=>[r.SWAP_QUOTE, e],
            createSwapTransaction: e=>[r.CREATE_SWAP_TRANSACTION, e],
            gasPrices: e=>[r.GAS_PRICES, e],
            createStakeTransaction: e=>[r.CREATE_STAKE_TRANSACTION, {
                ...e,
                body: {
                    ...e.body,
                    provider: null
                }
            }],
            stakeInfo: ()=>[r.STAKE_INFO]
        }
    },
    6916: function(e, t, n) {
        n.d(t, {
            J: function() {
                return l
            }
        });
        var r, o, a = n(46223);
        (r = o || (o = {})).ALLOWANCE_APPROVAL = "/allowanceApproval",
        r.CREATE = "/create",
        r.CREATE_SWAP = "/create/swap",
        r.SWAP_QUOTE = "/create/swap/quote",
        r.GAS_PRICES = "/gasPrices",
        r.STAKE_INFO = "/stake/info";
        class i extends a.gN {
            constructor() {
                super({
                    context: "/transactions"
                }),
                this.getAllowanceApproval = async e=>{
                    let {body: t} = e
                      , {data: n} = await this.http.post(o.ALLOWANCE_APPROVAL, t);
                    return n
                }
                ,
                this.createTransaction = async e=>{
                    let {body: t} = e
                      , {data: n} = await this.safePost(o.CREATE, t);
                    return n
                }
                ,
                this.getSwapQuote = async e=>{
                    let {body: t} = e
                      , {data: n} = await this.http.post(o.SWAP_QUOTE, t);
                    return n.data
                }
                ,
                this.createSwapTransaction = async e=>{
                    let {body: t} = e
                      , {data: n} = await this.safePost(o.CREATE_SWAP, t);
                    return n
                }
                ,
                this.getGasPrices = async e=>{
                    let {queryParameters: t} = e
                      , {data: n} = await this.http.get(o.GAS_PRICES, {
                        params: t
                    });
                    return n
                }
                ,
                this.getStakeInfo = async()=>{
                    let {data: e} = await this.http.get(o.STAKE_INFO, {
                        baseURL: "/api"
                    });
                    return e
                }
            }
        }
        let l = new i
    },
    87440: function(e, t, n) {
        n.d(t, {
            y: function() {
                return A
            }
        });
        var r = n(82580)
          , o = n(48791)
          , a = n(99185)
          , i = n(36492)
          , l = n(78010)
          , s = n(6916);
        let u = (e,t)=>(0,
        i.a)(l.a.allowanceApproval(e), ()=>s.J.getAllowanceApproval(e), t)
          , d = (e,t)=>(0,
        i.a)(l.a.create(e), ()=>s.J.createTransaction(e), t);
        var E = n(58871)
          , T = n(84085)
          , c = n(24952);
        let A = e=>{
            let {logError: t} = e
              , {selectedAccount: n} = (0,
            o.Z_)()
              , {logException: i} = (0,
            a.I)()
              , {values: l} = (0,
            r.u6)()
              , {fromToken: s, toToken: A} = l
              , N = T.u5.getSwapActionType({
                fromToken: s,
                toToken: A
            })
              , _ = e=>{
                let n = E.IT.APPROVAL_CHECK
                  , r = E.CB.buildSwapException({
                    functionName: n,
                    error: e,
                    formValues: {
                        fromToken: s
                    }
                });
                t && i(r)
            }
              , R = c.i.formValuesToAllowanceApprovalParams({
                selectedAccount: n,
                values: l
            })
              , {data: O, isFetching: I} = u(R, {
                enabled: null != R,
                onError: _
            })
              , p = N === T._k.SWAP && null != O && O.length > 0
              , m = c.i.formValuesToBuildAllowanceTxParams({
                selectedAccount: n,
                values: l
            })
              , {data: S, isFetching: f} = d(m, {
                enabled: p && null != m,
                onError: _
            })
              , h = p ? null == S ? void 0 : S.transaction : void 0;
            return {
                allowanceTransaction: h,
                isCheckingAllowance: I || f
            }
        }
    },
    21497: function(e, t, n) {
        n.d(t, {
            F: function() {
                return c
            }
        });
        var r = n(82580)
          , o = n(67294)
          , a = n(48791)
          , i = n(31821)
          , l = n(99185)
          , s = n(41323)
          , u = n(75877)
          , d = n(58871)
          , E = n(5093)
          , T = n(24952);
        let c = e=>{
            let {useRefetch: t, disabled: n, updateFormData: c} = e
              , {values: A, setFieldValue: N} = (0,
            r.u6)()
              , {selectedAccount: _} = (0,
            a.Z_)()
              , {logException: R} = (0,
            l.I)()
              , {getFromAmount: O} = (0,
            E.gI)()
              , I = e=>{
                if (!c)
                    return;
                let t = d.IT.GET_QUOTE
                  , n = d.CB.buildSwapException({
                    functionName: t,
                    formValues: A,
                    error: e
                });
                R(n)
            }
              , p = T.i.formValuesToSwapQuoteParams({
                selectedAccount: _,
                values: A,
                getFromAmount: O
            })
              , m = (0,
            i.N)(p, 500)
              , {data: S, isFetching: f} = (0,
            u.F)(m, {
                enabled: null != m && !n,
                onError: I,
                refetchInterval: t ? 15e3 : void 0,
                retry: t ? 3 : void 0
            });
            return (0,
            o.useEffect)(()=>{
                if (!p && c) {
                    let e = O ? d.$M.FROM_TOKEN_AMOUNT : d.$M.TO_TOKEN_AMOUNT;
                    N(e, void 0)
                }
            }
            , [p, N, O, c]),
            (0,
            o.useEffect)(()=>{
                let e = O ? d.$M.FROM_TOKEN_AMOUNT : d.$M.TO_TOKEN_AMOUNT
                  , t = O ? A.fromToken : A.toToken;
                if (c) {
                    if (S && null != t) {
                        let n = s.a.fromBaseUnit(S.amount, t.decimals);
                        N(e, n, !1)
                    } else
                        N(e, void 0, !1)
                }
            }
            , [S, A.fromToken, A.toToken, O, N, c]),
            {
                isFetchingSwapQuote: f,
                swapQuote: S
            }
        }
    },
    5093: function(e, t, n) {
        n.d(t, {
            gI: function() {
                return i
            },
            qO: function() {
                return a
            }
        });
        var r = n(67294);
        let o = (0,
        r.createContext)(void 0)
          , a = o.Provider
          , i = ()=>{
            let e = (0,
            r.useContext)(o);
            return null != e ? e : {}
        }
    },
    34562: function(e, t, n) {
        n.d(t, {
            E8: function() {
                return i
            },
            Wn: function() {
                return a
            }
        });
        var r = n(67294);
        let o = (0,
        r.createContext)(void 0)
          , a = o.Provider
          , i = ()=>{
            let e = (0,
            r.useContext)(o);
            if (!e)
                throw Error("swapTokensContext: the hook must be used inside an SwapTokensContextProvider to work properly.");
            return e
        }
    },
    84085: function(e, t, n) {
        n.d(t, {
            _W: function() {
                return a
            },
            _k: function() {
                return i
            },
            u5: function() {
                return T
            }
        });
        var r, o, a, i, l = n(69402), s = n(99740), u = n(41323), d = n(17367), E = n(58871);
        (r = a || (a = {})).TOKEN_AMOUNT_REQUIRED = "TOKEN_AMOUNT_REQUIRED",
        r.TOKEN_AMOUNT_INSUFFICIENT_BALANCE = "TOKEN_AMOUNT_INSUFFICIENT_BALANCE",
        r.TOKEN_FIELD_REQUIRED = "TOKEN_FIELD_REQUIRED",
        (o = i || (i = {})).SWAP = "SWAP",
        o.WRAP = "WRAP",
        o.UNWRAP = "UNWRAP",
        o.UNKNOWN = "UNKNOWN";
        let T = new class {
            constructor() {
                var e, t, n;
                this.minSwapBalance = u.a.toBaseUnit("0.01", s.U.decimals),
                this.validateTokenAmount = e=>{
                    let {amount: t, isFromField: n=!1, maxBalance: r="0", decimals: o=s.zo} = e;
                    if (!this.validateStringAmount(t, o))
                        return a.TOKEN_AMOUNT_REQUIRED;
                    let i = u.a.toBaseUnit(t, o)
                      , l = u.a.toBaseUnit(r, o);
                    if (n && i > l)
                        return a.TOKEN_AMOUNT_INSUFFICIENT_BALANCE
                }
                ,
                this.validateStringAmount = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.zo;
                    if (null == e || 0 === e.length)
                        return !1;
                    let n = u.a.toBaseUnit(e, t);
                    return n > 0
                }
                ,
                this.validateToken = e=>{
                    if (!e)
                        return a.TOKEN_FIELD_REQUIRED
                }
                ,
                this.getSwapSlippage = e=>{
                    var t, n;
                    let {fromToken: r, toToken: o} = e
                      , a = Math.round((null !== (t = null == r ? void 0 : r.sellFees) && void 0 !== t ? t : 0) * 10) / 10
                      , i = Math.round((null !== (n = null == o ? void 0 : o.buyFees) && void 0 !== n ? n : 0) * 10) / 10;
                    return a + i + 1
                }
                ,
                this.getSwapTokensInitialValues = r=>{
                    var o, a;
                    return {
                        [E.$M.GAS_PRICE_LEVEL]: d.f.MEDIUM,
                        [E.$M.SLIPPAGE]: this.getSwapSlippage({
                            fromToken: null == r ? void 0 : r.fromToken,
                            toToken: null == r ? void 0 : r.toToken
                        }),
                        [E.$M.NETWORK]: null !== (n = null !== (t = null !== (e = null == r ? void 0 : r.network) && void 0 !== e ? e : null == r ? void 0 : null === (o = r.fromToken) || void 0 === o ? void 0 : o.network) && void 0 !== t ? t : null == r ? void 0 : null === (a = r.toToken) || void 0 === a ? void 0 : a.network) && void 0 !== n ? n : s.cU.BINANCE_MAINNET,
                        ...r
                    }
                }
                ,
                this.getSwapTokensInitialErrors = (e,t)=>{
                    var n, r;
                    let o = {
                        [E.$M.FROM_TOKEN]: this.validateToken(null == e ? void 0 : e.fromToken),
                        [E.$M.TO_TOKEN]: this.validateToken(null == e ? void 0 : e.toToken),
                        [E.$M.FROM_TOKEN_AMOUNT]: this.validateTokenAmount({
                            amount: null == e ? void 0 : e.fromTokenAmount,
                            isFromField: !0,
                            maxBalance: t,
                            decimals: null == e ? void 0 : null === (n = e.fromToken) || void 0 === n ? void 0 : n.decimals
                        }),
                        [E.$M.TO_TOKEN_AMOUNT]: this.validateTokenAmount({
                            amount: null == e ? void 0 : e.toTokenAmount,
                            isFromField: !1,
                            decimals: null == e ? void 0 : null === (r = e.toToken) || void 0 === r ? void 0 : r.decimals
                        })
                    };
                    return Object.keys(o).forEach(e=>void 0 === o[e] && delete o[e]),
                    o
                }
                ,
                this.isFromField = e=>e === E.$M.FROM_TOKEN || e === E.$M.FROM_TOKEN_AMOUNT,
                this.getSwapActionType = e=>{
                    let {fromToken: t, toToken: n} = e;
                    if (null == t || null == n)
                        return i.UNKNOWN;
                    let {wrappedTokenAddress: r} = s.Eu[t.network]
                      , o = u.a.areSameAddress(n.address, r)
                      , a = u.a.areSameAddress(t.address, r);
                    return t.type === l.i.NATIVE && o ? i.WRAP : n.type === l.i.NATIVE && a ? i.UNWRAP : i.SWAP
                }
                ,
                this.getMaxAmount = e=>{
                    let {token: t, amount: n="0"} = e;
                    if (null == t || t.type !== l.i.NATIVE)
                        return n;
                    let r = u.a.toBaseUnit(n, t.decimals)
                      , o = r - this.minSwapBalance;
                    return o > 0 ? u.a.fromBaseUnit(o, t.decimals) : "0"
                }
            }
        }
    },
    24952: function(e, t, n) {
        n.d(t, {
            i: function() {
                return E
            }
        });
        var r, o, a = n(69402), i = n(99740), l = n(41323), s = n(38138), u = n(17367);
        (r = o || (o = {})).TRANSFER = "TRANSFER",
        r.MINT = "MINT",
        r.APPROVAL = "APPROVAL",
        r.SWAP = "SWAP",
        r.NFT_SWAP = "NFT_SWAP",
        r.CONTRACT_INTERACTION = "CONTRACT_INTERACTION";
        var d = n(84085);
        let E = new class {
            constructor() {
                this.formValuesToAllowanceApprovalParams = e=>{
                    let {selectedAccount: t, values: n} = e
                      , {fromToken: r, fromTokenAmount: o} = n;
                    if (null == t || null == r || null == o || r.type === a.i.NATIVE)
                        return;
                    let s = l.a.toBaseUnit(o, r.decimals).toString()
                      , u = i.Eu[r.network].floozRouter
                      , {address: d, network: E} = r;
                    return {
                        body: {
                            userAddress: t,
                            spender: u,
                            tokenAddress: d,
                            amount: s,
                            network: E
                        }
                    }
                }
                ,
                this.formValuesToBuildAllowanceTxParams = e=>{
                    let {selectedAccount: t, values: n} = e
                      , {fromToken: r} = n;
                    if (null == t || null == r || r.type === a.i.NATIVE)
                        return;
                    let l = {
                        to: r.address,
                        from: t,
                        network: r.network,
                        gasPriceLevel: u.f.MEDIUM,
                        contractType: a.i.ERC_20,
                        type: o.APPROVAL,
                        metadata: {
                            spender: i.Eu[r.network].floozRouter,
                            amount: "max"
                        }
                    };
                    return {
                        body: l
                    }
                }
                ,
                this.formValuesToSwapQuoteParams = e=>{
                    let {selectedAccount: t, values: n, getFromAmount: r} = e
                      , {fromToken: o, toToken: a, gasPriceLevel: i, slippage: u, network: E, toTokenAmount: T, fromTokenAmount: c} = n;
                    if (null == o || null == a)
                        return;
                    let A = r && d.u5.validateStringAmount(T, a.decimals) || !r && d.u5.validateStringAmount(c, o.decimals);
                    if (null == i || !A)
                        return;
                    let N = r ? void 0 : l.a.toBaseUnit(c, o.decimals)
                      , _ = r ? l.a.toBaseUnit(T, a.decimals) : void 0
                      , R = {
                        buyCurrency: a.address,
                        sellCurrency: o.address,
                        buyAmount: null == _ ? void 0 : _.toString(),
                        sellAmount: null == N ? void 0 : N.toString(),
                        network: E,
                        gasPriceLevel: i,
                        contractType: s.R.FLOOZ_MULTICHAIN_ROUTER,
                        slippage: null != u ? u : 0,
                        userAddress: t
                    };
                    return {
                        body: R
                    }
                }
                ,
                this.formValuesToBuildSwapTxParams = e=>{
                    let {selectedAccount: t, values: n, referrer: r} = e
                      , o = this.formValuesToSwapQuoteParams({
                        selectedAccount: t,
                        values: n
                    });
                    if (null == t || null == o)
                        return;
                    let a = null != r && !l.a.areSameAddress(r, t)
                      , i = {
                        ...o.body,
                        referee: a ? r : void 0
                    };
                    return {
                        body: i
                    }
                }
            }
        }
    },
    50950: function(e, t, n) {
        n.d(t, {
            s: function() {
                return E
            }
        });
        var r = n(67294)
          , o = n(69484)
          , a = n(87988)
          , i = n(48791)
          , l = n(27766)
          , s = n(41323)
          , u = n(84085)
          , d = n(46953);
        let E = e=>{
            var t;
            let {toTokenAddress: n, fromTokenAddress: E, lockToToken: T, toTokenAmount: c, fromTokenAmount: A, multiChainContracts: N, network: _, refId: R, swapTokensContext: O, quoteId: I, isLoading: p} = null != e ? e : {}
              , {providerNetwork: m} = (0,
            i.Z_)()
              , {address: S} = (0,
            l.e)(R)
              , {data: f} = (0,
            a.m)()
              , h = null !== (t = null == f ? void 0 : f.prefillSwapAmount) && void 0 !== t && t
              , P = _ ? null == N ? void 0 : N[_] : void 0
              , v = null != n ? n : P
              , {data: w, isInitialLoading: g} = (0,
            o.d)({
                pathParameters: {
                    tokenAddress: v
                },
                queryParameters: {
                    network: _
                }
            }, {
                enabled: null != v
            })
              , C = d.S.getSwapFromToken({
                toToken: w,
                fromTokenParam: E,
                networkParam: _,
                providerNetwork: m
            })
              , F = {
                tokenAddress: C.address
            }
              , U = {
                network: C.network
            }
              , {data: k} = (0,
            o.d)({
                pathParameters: F,
                queryParameters: U
            }, {
                enabled: null != C.address && null != C.address
            })
              , L = (0,
            r.useMemo)(()=>({
                referrer: S,
                quoteId: I,
                lockToken: T ? v : void 0,
                isLoading: g || !!p,
                ...O
            }), [S, v, g, p, O, T, I])
              , y = (0,
            r.useMemo)(()=>{
                let e = s.a.areSameAddress(null == k ? void 0 : k.address, null == w ? void 0 : w.address)
                  , t = !isNaN(parseFloat(null != A ? A : ""))
                  , n = !isNaN(parseFloat(null != c ? c : ""))
                  , r = h ? d.S.getSwapFromTokenDefaultAmount(k) : void 0;
                return u.u5.getSwapTokensInitialValues({
                    fromToken: e ? void 0 : k,
                    toToken: w,
                    fromTokenAmount: t ? A : r,
                    toTokenAmount: n ? c : void 0
                })
            }
            , [k, w, A, c, h]);
            return {
                swapTokensContext: L,
                initialValues: y
            }
        }
    },
    46953: function(e, t, n) {
        n.d(t, {
            S: function() {
                return i
            }
        });
        var r = n(99740)
          , o = n(41323)
          , a = n(98671);
        let i = new class {
            constructor() {
                this.getSwapFromTokenDefaultAmount = e=>{
                    var t;
                    return null === (t = [r.lJ, r.XE, r.U].find(t=>o.a.areSameAddress(t.address, null == e ? void 0 : e.address))) || void 0 === t ? void 0 : t.defaultSwapAmount
                }
                ,
                this.getSwapFromToken = e=>{
                    let {toToken: t, providerNetwork: n, fromTokenParam: o, networkParam: a, defaultNetwork: i=r.cU.BINANCE_MAINNET} = e;
                    if (o)
                        return {
                            address: o,
                            network: a
                        };
                    if (t) {
                        let {address: e} = r.Eu[t.network].nativeCurrency;
                        return {
                            address: e,
                            network: t.network
                        }
                    }
                    if (a) {
                        let {address: e} = r.Eu[a].nativeCurrency;
                        return {
                            address: e,
                            network: a
                        }
                    }
                    let l = null != n ? n : i
                      , {address: s} = r.Eu[l].nativeCurrency;
                    return {
                        address: s,
                        network: l
                    }
                }
                ,
                this.getChartUrl = e=>{
                    let {networkParamName: t, refIdParamName: n, tokenDetailsRoute: o, useExternalWebsite: i, tokenAddress: l, refId: s, network: u} = e
                      , d = (0,
                    a.G)(o, {
                        tokenAddress: l
                    })
                      , E = new URLSearchParams([[t, u]]);
                    s && E.append(n, s);
                    let T = "".concat(d, "?").concat(E.toString())
                      , c = i ? r.Eu[u].getTokenChartUrl(l) : T;
                    return c
                }
            }
        }
    },
    32585: function(e, t, n) {
        n.d(t, {
            E: function() {
                return i
            },
            U: function() {
                return a
            }
        });
        var r = n(99740)
          , o = n(49261);
        let a = {
            id: o.i.UNKNOWN,
            name: "Something went wrong",
            description: "You spotted an unknown error. Don't worry, we are working on a fix to make Flooz errorless.",
            matcher: new RegExp(/.*/),
            log: !0
        }
          , i = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.cU.BINANCE_MAINNET;
            return [{
                id: o.i.TRANSACTION_UNDERPRICED,
                name: "Gas limit changed",
                description: 'This occurred because the gas price was manually changed. Please use the "Speed" field for speeding up transactions.',
                matcher: new RegExp(/transaction underpriced/),
                log: !0
            }, {
                id: o.i.PRICE_IMPACT_TOO_HIGH,
                name: "Price impact too high",
                description: "Try trading a smaller amount, or increase slippage tolerance via the settings icon and try again. This is caused by low liquidity.",
                matcher: new RegExp(/price impact too high/),
                log: !0
            }, {
                id: o.i.EXPIRED,
                name: "Transaction expired",
                description: 'This happened because the transaction was not signed quick enough. Try hitting "confirm" quicker next time.',
                matcher: new RegExp(/expired/),
                log: !0
            }, {
                id: o.i.INSUFFICIENT_OUTPUT,
                name: "Wrong slippage tolerance",
                description: "When your slippage tolerance is too low, your order may fail to execute because the price movement is too high. Try setting a higher slippage.",
                matcher: new RegExp(/INSUFFICIENT_OUTPUT|INSUFFICIENT_OUTPUT_AMOUNT|FloozRouter: REVERTED|INSUFFICIENT_A_AMOUNT|INSUFFICIENT_B_AMOUNT/),
                log: !0
            }, {
                id: o.i.TRANSFER_FROM_FAILED,
                name: "Cannot transfer tokens",
                description: "This could be a problem with the token you are swapping. Please report this to the team so we can make Flooz errorless.",
                matcher: new RegExp(/TRANSFER_FROM_FAILED/),
                log: !0
            }, {
                id: o.i.SLIPPAGE_TOO_LOW,
                name: "Slippage too low",
                description: "You are trying to swap a token but your slippage tolerance is too low. Try setting it a bit higher.",
                matcher: new RegExp(/FloozRouter: LOW_SLIPPAGE/),
                log: !0
            }, {
                id: o.i.TRANSFER_FAILED,
                name: "More tokens needed",
                description: "Make sure you have enough tokens in your wallet. If you want to sell the maximum possible, try trading a lower amount.",
                matcher: new RegExp(/TRANSFER_FAILED/),
                log: !0
            }, {
                id: o.i.INSUFFICIENT_USER_BALANCE,
                name: "Fund your wallet",
                description: "You need to add more ".concat(r.Eu[e].nativeCurrency.symbol, " to your wallet for this trade to go through, once you've added more ").concat(r.Eu[e].nativeCurrency.symbol, " please try again."),
                matcher: new RegExp(/INSUFFICIENT_USER_BALANCE|gas required exceeds allowance|insufficient funds for transfer/),
                log: !0
            }, {
                id: o.i.PANCAKE_K_ERROR,
                name: "Exchange error",
                description: "We placed your trade on a decentralised exchange, however, they have rejected the trade. Please increase the slippage on your trade and try again.",
                matcher: new RegExp(/execution reverted: Pancake: K/),
                log: !0
            }, {
                id: o.i.TRANSACTION_REVERTED,
                name: "Blockchain error",
                description: "We sent your transaction to the blockchain but it failed. This could be due to several reasons such as a large price movement, or not enough liquidity. Please try to place your trade again.",
                matcher: new RegExp(/transaction-reverted/),
                log: !0
            }, {
                id: o.i.SELF_REFERRAL,
                name: "Self referral",
                description: "You cannot swap tokens using your own referral link. Please use another wallet and try again.",
                matcher: new RegExp(/FloozRouter: SELF_REFERRAL/),
                log: !1
            }, {
                id: o.i.TRANSACTION_REJECTED,
                name: "Transaction rejected",
                description: "The transaction was rejected in your wallet. You can always try swapping your tokens again.",
                matcher: new RegExp(/User denied transaction signature|User canceled|cancelled|User rejected the transaction|user rejected transaction/),
                log: !1
            }]
        }
    },
    58871: function(e, t, n) {
        n.d(t, {
            $M: function() {
                return a
            },
            CB: function() {
                return d
            },
            IT: function() {
                return i
            }
        });
        var r, o, a, i, l = n(29204), s = n(27187), u = n(32585);
        (r = a || (a = {})).FROM_TOKEN = "fromToken",
        r.TO_TOKEN = "toToken",
        r.FROM_TOKEN_AMOUNT = "fromTokenAmount",
        r.TO_TOKEN_AMOUNT = "toTokenAmount",
        r.GAS_PRICE_LEVEL = "gasPriceLevel",
        r.SLIPPAGE = "slippage",
        r.NETWORK = "network",
        (o = i || (i = {})).GET_QUOTE = "GET_QUOTE",
        o.APPROVAL_CHECK = "APPROVAL_CHECK",
        o.APPROVAL_BUILD = "APPROVAL_BUILD",
        o.APPROVAL_SEND = "APPROVAL_SEND",
        o.APPROVAL_WAIT = "APPROVAL_WAIT",
        o.SWAP_TOKEN_BUILD = "SWAP_TOKEN_BUILD",
        o.SWAP_TOKEN_SEND = "SWAP_TOKEN_SEND",
        o.SWAP_TOKEN_WAIT = "SWAP_TOKEN_WAIT",
        o.UNKNOWN = "UNKNOWN";
        let d = new class {
            constructor() {
                this.getSwapError = (e,t)=>{
                    let n = this.parseErrorMessage(e)
                      , r = (0,
                    u.E)(t).find(e=>e.matcher.exec(n));
                    return null != r ? r : u.U
                }
                ,
                this.buildSwapException = e=>{
                    let {functionName: t, error: n, formValues: r} = e
                      , o = this.parseErrorMessage(n)
                      , a = null != (0,
                    u.E)().find(e=>e.matcher.exec(o));
                    return {
                        exception: n,
                        context: {
                            functionName: t,
                            parsedMessage: o,
                            formValues: r
                        },
                        severity: a ? "info" : "error"
                    }
                }
                ,
                this.parseErrorMessage = e=>{
                    if (!e || null == e)
                        return "Unknown error";
                    if (e instanceof l.d7) {
                        var t, n, r;
                        return null !== (r = null === (t = e.response) || void 0 === t ? void 0 : null === (n = t.data) || void 0 === n ? void 0 : n.message) && void 0 !== r ? r : e.message
                    }
                    return "object" == typeof e && s.Q.hasOwnProperty(e, "reason") && null != e.reason ? e.reason : "object" == typeof e && s.Q.hasOwnProperty(e, "message") ? e.message : "string" == typeof e ? e : JSON.stringify(e)
                }
            }
        }
    },
    51736: function(e, t, n) {
        n.d(t, {
            p: function() {
                return a
            }
        });
        var r = n(48228)
          , o = n(2948);
        let a = e=>(0,
        r.D)(e=>o.x.sendTransaction(e), e)
    },
    13484: function(e, t, n) {
        var r, o;
        n.d(t, {
            T: function() {
                return r
            }
        }),
        (o = r || (r = {})).BOUGHT_TOKEN = "BOUGHT_TOKEN",
        o.SENT_TOKEN = "SENT_TOKEN",
        o.SOLD_TOKEN = "SOLD_TOKEN",
        o.RECEIVED_TOKEN = "RECEIVED_TOKEN",
        o.APPROVAL = "APPROVAL",
        o.SWAP = "SWAP",
        o.MINTED_NFT = "MINTED_NFT",
        o.SENT_NFT = "SENT_NFT",
        o.RECEIVED_NFT = "RECEIVED_NFT",
        o.BOUGHT_NFT = "BOUGHT_NFT",
        o.SOLD_NFT = "SOLD_NFT",
        o.AIRDROP_NFT = "AIRDROP_NFT",
        o.CONTRACT_EXECUTION = "CONTRACT_EXECUTION"
    },
    3402: function(e, t, n) {
        n.r(t),
        n.d(t, {
            ModalSwitchNetwork: function() {
                return A
            },
            ModalSwitchNetworkQueryParams: function() {
                return r
            }
        });
        var r, o = n(85893), a = n(9264), i = n(67294), l = n(99740), s = n(77902), u = n(33715), d = n(47885), E = n(69308), T = n(27722), c = n(48791);
        (r || (r = {})).REQUIRED_CHAIN = "requiredChain";
        let A = e=>{
            let {location: t} = e
              , {modalHistory: n} = (0,
            T.N)()
              , {setupProviderNetwork: A, providerNetwork: N} = (0,
            c.Z_)()
              , {t: _} = (0,
            a.$G)()
              , R = new URLSearchParams(t.search)
              , O = R.get(r.REQUIRED_CHAIN)
              , I = null != O ? O : l.cU.BINANCE_MAINNET;
            (0,
            i.useEffect)(()=>{
                I === N && n.back()
            }
            , [I, N, n]);
            let p = (0,
            i.useCallback)(()=>{
                A(I)
            }
            , [A, I]);
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(E.u.Header, {
                    title: _("flooz-web.shared.modal-switch-network.title", {
                        chain: l.Eu[I].label
                    })
                }), (0,
                o.jsx)(E.u.Content, {
                    children: (0,
                    o.jsxs)(d.P, {
                        gap: "200",
                        grow: "1",
                        children: [(0,
                        o.jsx)(u.J, {
                            icon: l.Eu[I].logo,
                            className: "modal-switch-network__chain-logo"
                        }), (0,
                        o.jsx)("p", {
                            className: "center-text",
                            children: _("flooz-web.shared.modal-switch-network.content", {
                                chain: l.Eu[I].label
                            })
                        }), (0,
                        o.jsx)(s.z, {
                            variant: "primary",
                            size: "xl",
                            onClick: p,
                            children: _("flooz-web.shared.modal-switch-network.cta")
                        })]
                    })
                })]
            })
        }
    },
    49261: function(e, t, n) {
        var r, o;
        n.d(t, {
            i: function() {
                return r
            }
        }),
        (o = r || (r = {})).TRANSACTION_REJECTED = "TRANSACTION_REJECTED",
        o.TRANSACTION_UNDERPRICED = "TRANSACTION_UNDERPRICED",
        o.PRICE_IMPACT_TOO_HIGH = "PRICE_IMPACT_TOO_HIGH",
        o.EXPIRED = "EXPIRED",
        o.INSUFFICIENT_OUTPUT = "INSUFFICIENT_OUTPUT",
        o.TRANSFER_FROM_FAILED = "TRANSFER_FROM_FAILED",
        o.SLIPPAGE_TOO_LOW = "SLIPPAGE_TOO_LOW",
        o.TRANSFER_FAILED = "TRANSFER_FAILED",
        o.INSUFFICIENT_USER_BALANCE = "INSUFFICIENT_USER_BALANCE",
        o.PANCAKE_K_ERROR = "PANCAKE_K_ERROR",
        o.TRANSACTION_REVERTED = "TRANSACTION_REVERTED",
        o.SELF_REFERRAL = "SELF_REFERRAL",
        o.UNKNOWN = "UNKNOWN"
    },
    99185: function(e, t, n) {
        n.d(t, {
            I: function() {
                return s
            },
            M: function() {
                return l
            }
        });
        var r = n(64487)
          , o = n(11507)
          , a = n(67294)
          , i = n(48791);
        let l = new class {
            constructor() {
                this.setEnabled = e=>{
                    this.enabled = e
                }
                ,
                this.logException = (e,t)=>{
                    this.enabled && r.Tb(e, t)
                }
                ,
                this.flush = e=>o.yl(e),
                this.enabled = !1
            }
        }
          , s = ()=>{
            let {selectedAccount: e, providerNetwork: t, activeConnector: n} = (0,
            i.Z_)()
              , r = (0,
            a.useCallback)(r=>{
                let {exception: o, context: a, severity: i="error"} = r
                  , s = {
                    id: null == e ? void 0 : e.toLowerCase()
                };
                l.logException(o, {
                    user: s,
                    tags: {
                        connector: n,
                        providerNetwork: t
                    },
                    contexts: a ? {
                        context: a
                    } : void 0,
                    level: i
                })
            }
            , [e, t, n]);
            return {
                logException: r
            }
        }
    },
    27766: function(e, t, n) {
        n.d(t, {
            e: function() {
                return s
            }
        });
        var r = n(36492)
          , o = n(46223)
          , a = n(19069);
        let i = (e,t)=>(0,
        r.a)(a.a.decodeReferralId(e), ()=>o.W4.decodeReferralId(e), t);
        var l = n(60759);
        let s = e=>{
            let t = l.Wl.get(l.mJ.referralId, !0)
              , n = null != e ? e : t
              , {data: r} = i({
                pathParameters: {
                    refIdOrAddress: n
                }
            }, {
                enabled: null != n
            });
            return {
                address: null == r ? void 0 : r.address,
                refId: n
            }
        }
    },
    28285: function(e, t, n) {
        n.d(t, {
            h: function() {
                return T
            }
        });
        var r = n(67294)
          , o = n(36492)
          , a = n(46223)
          , i = n(19069);
        let l = (e,t)=>(0,
        o.a)(i.a.tokenPortfolio(e), ()=>a.W4.getTokenPortfolio(e), t);
        var s = n(94176)
          , u = n(48791)
          , d = n(99740);
        let E = new Map
          , T = e=>{
            var t;
            let {selectedAccount: n} = (0,
            u.Z_)()
              , {impersonatedUser: o} = (0,
            s.UV)()
              , a = null !== (t = null != e ? e : o) && void 0 !== t ? t : n
              , {data: i, status: T, isInitialLoading: c, dataUpdatedAt: A} = l({
                queryParameters: {
                    invalidate: a === n
                },
                pathParameters: {
                    address: a
                }
            }, {
                enabled: null != a
            })
              , {map: N, list: _, hiddenList: R} = (0,
            r.useMemo)(()=>{
                var e, t, n;
                if (!a || !i)
                    return {
                        map: new Map,
                        list: [],
                        hiddenList: []
                    };
                let r = null === (e = E.get(a)) || void 0 === e ? void 0 : e.get(A);
                if (r)
                    return r;
                let o = i.tokens.filter(e=>!0 !== e.hidden).sort((e,r)=>parseFloat(null !== (t = r.usdBalance) && void 0 !== t ? t : "0") - parseFloat(null !== (n = e.usdBalance) && void 0 !== n ? n : "0"))
                  , l = i.tokens.filter(e=>!0 === e.hidden)
                  , s = new Map(d.si.map(e=>[e, new Map]));
                o.forEach(e=>{
                    var t;
                    return null === (t = s.get(e.network)) || void 0 === t ? void 0 : t.set(e.address, e)
                }
                );
                let u = {
                    map: s,
                    list: o,
                    hiddenList: l
                };
                return E.set(a, new Map([[A, u]])),
                u
            }
            , [a, i, A]);
            return {
                list: _,
                hiddenList: R,
                map: N,
                status: c ? "loading" : "error" === T ? "error" : "success" === T ? "success" : "idle"
            }
        }
    }
}]);
