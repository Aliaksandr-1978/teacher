const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalClose = document.querySelectorAll('.modal__close');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalid = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalid);
        let modalContent = document.querySelector('.modal__content');
        
        modalContent.addEventListener('click', event =>{
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';
        },1);       
    }); 
});

modalClose.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');
        
        closeModal(currentModal);

    }); 
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target;
        
        closeModal(currentModal);

    }); 
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    },200);
};




(function(startup){
    function start(savedPresentationState)
    {
        var presInfo = "eNrlXQtzG8eR/is4XDmVVIHrncfO7ugq5QNJyEKZIhQC8uMsF4sSKZmxRLJISrKjUpUeSeyUfZbsWGfFjmVbviRX5VRM06JFPSj9hcVfuF9yX/fsAgssXrJFuO5ODwKY7enp7unn7KJ5obhcPFC8oKNJVSkrMTFptZzQk/gxaQ9OT1T0QTtt7JQWtnKxWCpuAhgvJ+g1vh8/al6aiHeb1wrxY7xcbr4XP4y3cP188YA1fqn4evFAoPF6AuAnVteX6mvr80LZ0GilAbZ2rnhA+sKUimeJiuWNk+tLS+tn560XesKfV740/r8Abql44EJxhX68QT/wcXP97FKpuFA88CpfKK6tAWyDPwJESV7y5MLpjSUe5ncXX7tYctArGx3QejD0Wie0GoJ7MwsthkCvDYYmNtvAJzsJMQzsJJHHfLoTOBgMfC4LHA2meaMXGf2hl3rQ0R/6ZAe0HQJ9vAM6HAx97mwH9BAuzy1moRMl7gu92UF36PeWNsCLZzo0mOxoo3gR42s0vpCOn+7WglJxndSleJG1/kLxZIr1YrpuYppVvMjAOHKKiwubC8ee3Ti9vLgkvF/Txp3oHj3B+9kgpMuta5uvnzmOCWunnDGHEduyVlhtsUUaiPRLbZqXmAzw4Xu+L0gyXe+FZ6313R8dahtmYbLjOkinyH0HYQb8i6+ViPsLiUshQWysret5JRcDrcMTEMNxXFFh4AXSqiC0wheBUSWJEaND31ciVJGMRElExlMA8gMZKo0ZJSlCTwsRCmm00ZHWr/HGvypKPv6K0oRVnoBPDKRRJhQRpkwIP/JCP4i08I3WgRKvsQa05uSn5GcQ1wknwQicKOMZqX1rQyUIQUmE1pMgX1naOBtBZEIK33aTH1lMJJpFHjBLcwKXB8sQanKEBiDCat83SoeGCQ2MJzMSjiDgyIswpENlFPbAwQgrpHSsCNVNM5blPcGMSBjtGwzJyPNtYIQIQimxVBf5+Sn5GRlOwhwnxvdsEIpAKQl1IUlgFy1QQilDDSbASSC8MMxuC4Ig8S+CCKOBNjnpA5EXRdaEkQ0CP4xoCFgElNLqkKiSQTcnuSn5GRlOohwnWmMHfSUDKyEOrUsqcMoD5WYEtAMhZGOwRdAoA8QlBH4PohJhEKgQwtR5TiIv0JHEP8d9acJYL/ID40MKzphynHRPyc8g22av6/zkYuq1XmUeFwe4hVd5Ts4TbBKys4xmsZ/fYTldcKAbBGQte0h6g6tvUYQBqtVWjE+JkaOv7EB9z8VUvOaX5TVFsuCZIoeZ4uHCBBNd4hdZmBEFclEw/NKEtNJToSxmKBpBPNFPJp5oP8TTLR0l4NJDsk4v8PUTyib4yWQT7JdsglJLNBNKU5CISjrypLZPKJvwJ5NNuK9mxZIRMCUQXlJwrdI8oWTMGCRD6eiy84PFDc5+Nl5fWFvaSIbq9Foqvuhe3kpe3nCvJ93L+dXUj3JF+HF8Pf48vhX/Of4svvlPhfjL+EH8KN6OtwrxdvNyvBN/F9+hD7uoE3ea7zevFDD6sPkufj7AaKH5dvNK/GiCfhQw8Vv8vxvvxVvNt/Ef4F4hvkGwBNqaSAj3gO5KqcATm//u5j9uXkKBetl9ABJC17xUAMbt5lUqXuNtWjP+lj9tex3k3gW8q2nfpQFaHO+vYVmqdR+B/kfNPzTfa77fnt9KvsN88i17Jt+yf/ItvbWVJ0m+3/x/L/5j68dW4usFMH+d/hfiTwvxR/EX8VfxHyGSPxXifxTw6cv45rF1/PxH/Be6DFnRjK/iv9CMT0huAL9eCGj0i/ibAoD/iMufxt/Et+O/A2l8Of6qoAn2FgBuAcf1wrGzUggD0A9w/Sa2ARcL+HCzQOhvA+ozDN2M/3Rs/V8LmA6oW9io6/GH8dfxJ4X4a0L3VfxfGKFFZLG7mOKN1l5i7DLSyDdDuYSMu6NwySc6fR3N/lt/yxyivDmonuag+puD+vHmQPqR0bFSDwX/Ayxjx2nuDiyFjORK891SAe934gfNa4kS0gwa2ybg75qXoICPMeldrMB/gfVO82rzHUzaxrQPAL8HPc5jZsMZGfrYeuHn8fcgcZsu/wIfaHZ7ANehRtC25wrx3/j1f6kefc6e422Y/xW4gXsF9jLJpsH4yaPEDwvMNfmCB5DDrnMZ8G70oXmt7YxtXvt0T+3T/bVP/xDtexpcpDrL3pLcJylLybnA7eYlvIPKQAn2ALFbgi7ssMp8y1r0KL4PgPvQz3dxhRAAKcZAyDYA7scPShQK9qB+7zPoA173Dtz6OyVS7KscM4iS38O3XwUvOwkKYgaI8f4xz/yerrD5wDQ8toG/9Y0iLkLsZgTyHOA/Thi/B5LxD+++x2eIqHm1BYm3JIY0tBBzWOQ54uJBK3wB2f85vedAOZK+Gz+v70FPfQ/663vwdPV9OPUcu6HC2MH3eNZ9hsQrXUGcv8L6AM1myHvA9QBjO5TWtEb2sOIWiLjPVvDY2c5W8/dMEX+EF/2A0T7EOE+ET7/M6EmD7mYWg9rFdxj1I7auR/x+FzTfZaa+y8ISsQkhOy45YSIuE3/JvPvNa2SxGH07oYSkdSVlHMQT47us8qCw+btkbTKEB2RDHdRusThBI0Mxj2wY31Eo4jFKTyjLcK9/R0C4GX/CVz6Ib8T/4TINxnmZ4hhwPgDGewzxORKbG5j5BaC+ROz8mhIXHr8NLH+Nr/OnLznPusUZ0W0e+ZizH+DFtW94BIGNZX2l+R5//iMynluA+4iyMMbxKcfnFjVYjda8wXQT9hs8+jeMfIG531AaxSO3Of1y697ixO0Wv/9LwjdWYL4/a/H9eZIJfpjh4RZnbNdpNf78Fdb8GhDXUy6KIxxrS89v/SEnEWXGxRO8H3SA/YSoxvJ+hJNzaxaTI0NjSkJbT9jA+mFybIgR48nQhsZG4Nb4qJXp7FwEYRgGURhZ33SfEYbKEwrgqLIiwYfOkSfCILQm8FszsieE3RPy8Plj8jbZUqJ4D0NwawN3ZBv4ngmFL30+OMVIFIIrJVWofG3oIH4oD1p5gTVGRCaQ7g5BygUh7KI/D5yFzZ+ct2lXIvSkCTVmutPpHsRbiw0IhKAlIJMoGoF66xmQoRFAactUNJD6HHAf6sNu6rVUHh20pwe5UQ/q6UQ50lCnQAodEcxQ6o31LPYKOpceuQ+gPg/ch/qom/rAKE+KAIotaSLtmtP+CFpkI75RFFoPIg8DaaUdTXGIXRup0N1GGqI4eeA+xNucrYbGE1qEkU6VgogPfZiAMlZo36iSjZBNaau0HyU3M0ZRHAU1sGEQRIEdpvY54D7U03MCneRHfuT5wohQK75No0B+5GmhlBVCuPtDVnihEMDu25Dvd4xAfuBFgfFF5BvCKgeTnwPuR77Ika9AvQaZvs+aYUvCkupA9IFvIhVYXYoCkK8RJgJhDN/2GE6+BEVwZBIFufJhQAPJzwH3I18OJ18GGJLS1xEYID9agnFYGUkDtZTYJzGC31fCswZ7CGsyyodKDPf8+SkDfb9QOecvlAf7DW0EKdhII2DZ0NMIXoFEEGNWIu35MOeAN0aN5P0RPLWmIkSEzu6HcpKfMpiTXPRV0nbdVgTxXiih/IaKIVhwyVIcC3wVJquMEgoixKYwUDlOeqlUN2w/jcrFYB2CffhJE9iEsGQbLAwjca7SeAi+UFSTGPjwQAAHDe+V8dCDAkEOuB/1uShslEYkQCRLPKVKqUcMSLwpOVPZ4etG8aVCSB1hU+Vw0eeA+1Gfi8KhkZ5gD8O3q0MPEQVSdrYdlgK6+wo/Go2e/EjKOOARXRAcJYPLzRis/LlYLCLhqQjRy0/vVkv4zwDRIRAR3VJPApyBj1I2tNibtkdyN887U1DtRQKJujYqomcvBnrSPHA/2efCMJyMR9N8Izj1i0C39pQSWvqI7C6kI9YhKgO35B2IBtAdQBEN/sggjXkD6M4D96Fb+vlUH3PhR2yLZQQDz1dIBE2aRUsJcfs2fVRFDSDbYPcEgofzwUPShjxwP7JzcVeFMEvkHDLxUQhcESXQFrlzK/3jZ2zgbRBUkgcfBolbIWAjBXHPWKgh4u4C7kd3LuDCBo2CyioQ4QsRypKCmmir20YplA/DNemDF6RJFmELfCAd9dkCclIPgEJBJiY1kQmhYTTYMKsFpzTdos/NyE3I8pGLtoJrkcxjUzk26JElumzhc5JnloaxoUIvpGekLGq49OGYwWzkZwxkIxdqyUZBPlLPyCaqnduOJ9cibWzyYM4IWpQB7qdF+SArDLiEpkP9LSesChmCkZH7IOgJK7AfuYhFT4UNE31gPe2HvlYuv2DKB4s+P2Og6HOhNlCBp6AYoQ79kEOtojzfIFNDOCK2kHqiEmhn0vx03lAdogCO7E9nMoUhOpSbMZCRXNRFEuMh19HCakVUwqtbHzEsCBN0liKDtY7NUTYD9QhCCBLZRM2GspCbMJCDXMwFZcgmAdzSIFCPohIKFhnNZzFPkQlBD7PxAcCIXGQmZNnIhWCEAY/cpo1EGqeQTEh6aDFFSuc/Suog0vSUWyZ562HMWnmIqEiddJS4gsEHP13AfYxZ+cNDAmwKxRCca+AwKHKmGAhN+tCfGcmZIqhGyLGNU8xRnGnXjEFqpHIxmQ546PSOcnsmHIzANHxk4kHku0BJJg6+ZCtDHEmRIsQRg1yPqdKjmEPXjIGM5IK01EhMJDLO9DFW1HSRB92H4qSJiqBUm/JrJd1x3XAXawCAoOtrVwkND9L5GQP5yAVpZQzEr6H9rpiwJY3MGZm1CeG6HdlUEoMNSCt9NHn4hlCBa1GmRyJyDm+4aeemDLRtlQvU2vieEbBqmYQLsKK8QCBbbyWPgYT+otJvET6cFapE4QawfELF0D3Jzxi4J7nQjbBNpbUFM9LZdg9GUP9jQ4w7/xrF2QIggnCVH7SPu4bwkZsxkA/TK+ppJHhJuQOqtZL0dK9FYS84jiCT1QjoKrPG8EwW/jkSJkC5LTvzkL66lZ8yWLfyZTP8hfWFbt92gL0h2iHrg9KSP7dc9EPt2kF9uJWQM0Qyg7pE+MkB6jAryU0ZzEnU474Nshh4qiiJoPSdAAFV89MsK6VbtY4XehxbI+wTcKgoaJrhdOenDKbbDq0mEIXggVE3aO1rd6wqUBVJWIXvu1PgERwuahyoaUR36FysGcpJfkoPTp7eE+pOAk/3gdHM15fcs7Stu3/t5Tvr0n15YLU0bDFH1o9+ulnx082CnuE1/ADvBOIaikJRHCKDYP+3ICMDNVgGT1/oaj+FHrSFDmEH9H0cSeboq2FSN2OVuh631PV+SZ0fVtfuWw5O7igvJNIVBF+8kcPkHo5V7sG45R7sq9xV8iUBEdJ3A0jm9CYYJvNorDI345a52U8Pk3yhR/EXelDFWFZ1RW+e8LsZ9icOteE4Q224v3vSDrWBRwktfQsVtdAwQ+i867/vlhCN2xKiffb6re9v2cCLnNwF3pihchdjlbsdt9zt/sk9833CiVDQd8Lo9E92fzesp9TVOKWu/DFLfdiCP/oLeS0nIwK69c6OX3oyGO5m9FgFL8YteLGfzl1mNF5Yzimdnxkh0RFjraWUHLfg97WAzbh3yisjwyVsSI5+qNzHWk2pcdewSu23p3EFLB2J0xmqjpDMDK1gxVhLKTXuElbtZwnLX7D2jHRpvS/p4Ja8jKUrQwUvxyr4cdewKhhDFslxdUIb4SX3MyMaHCr5sVayatyVrDL7KvkgK3k+tqFcUitsQTRM8nKsGbwKxy35cH9PKTNJvDJ0c8W1rRmlZLVjFfy4S1YVjSml0WkOL6yA3IcWT3KsRwVq3CWrsvvt5Fnohh4p0YisvqanwopPuYFIMuCa6R05uFLk75gWa2tLK4X6AvdrBFevJt9RPbmy6XvnV0+eLGJemRrL+SaKdPKganGa+Gx9q4bY7wJY7AQ4RV9jK7XWPj50cfGUF+cd4Z1tU7E8lAr51KlYzlFxfDgZar+E0YuejdzmFOpLZ5aPr55ezBGmx7BLG3kB9ScoGJuksJhJ6CqvLy+czpFisqTAy7TvkyeUCJE+6OncRxZisRviFDscJUORfNNsEGHhQMLCfSUsQ0aUkDGJlfnL7p10RJ10ZB4od3QI3fpahKMjC7HYDXHKDXTTYAeKwo5njzL0CD8haGrh9PLx9eW84/O7aEq+eNmmKXn4O0xpatOS0iBl8sBndmHRuXBhZvnU65v55cXTXB5YuJ3wCfpxpKMt6+n0zRkKstQtobF8Zun08go1sz2Xxv0MHPFx/K365hI3C15Nh9cyzVs7u8EyGjd0vjX0ZuvdbzrWuFA8fnZzc3XFO7G6srm0sumtrK6fWSB5/fNB/kMPvXRCrJ5bWu91/eTCiaXM9EBGk9Pdl9O5ejKcniIdPbF6Zm1h5a2Z1VOr3vGFE2+cWl89u7LI6BX9Bcjrb60trUNAb3RgPb28sVndXDrTibciKrIic5fX1pc2NpYYrZ0uy7LJQpxeOL50uk1ZiG0v569nULQY7wI5t7yxvOlAQlhLyH2oF04tdTE2VZkW04qvrWBWF9cpbndxc+nNzQ6q1k4vvLW03nfS6trZtX5yXFtfPUVMdF8P6W/2+unVhcVlOC5cnLb0N3uRCCAEHZvBeuwdX11fTLbBp7+UNHbSf5EV+AK1/Ui08Uzr3Uq+L/Fm6kZo6EJxJtskpD3Lwa62hlqWkbEmTkiPu7zweHv2iXxT5MR2qPlxla13cr48NVWp16uTM5X58tHpam1+tjw3V25Ua7PzM+XJygy1KLlOTT3iXeodk3aR4bYZ33ODJ2ptswNxdCI7MlN+pTI3X5+qACGhrTXm60ePHKnNNSrThPQjTNviriLfcY+ad6n3yRXuw7PnupZQ17M9buhE7XtoLVzlvk24vpM2ldou8JzvXXc26i/1gBuecVueb5nS3fhO8xq12Wn+Lkdn/YXq7DxoZAEkw9WZauOV+cO16Qo3aEm6A93j7jsd6/2o1WZrc4fLM6Mtk3aAYWHRR+peRPBbvZc4MlepV2Yb2IAjh2qNGuH/z6R30nc0q/lb137+DrdKIdrvUAsaapuSRzhTnQa187WD81O1o7MNQvYlz7kX3yk886ujlTqry+zRw5OVuWeoq9DdwjONWgPMpRfrz+TQvgisPbXtQ27nsvNE2vZSGbweLs+94NifmqtgYHr+pWrjkCOXeim5vjmPejXDI8z4OME9XS5h4V3swXJ9bX2ZcxwsNlmeemG+UZsvHzkyP3m00chS/BkQc2MeBzpVO3ykPPvK/Ezt+dr8ZPV5AvnUbR13zHlc4D49D0EEN/KJd4+t/Fwa8yaynl/0QFGHmswMR1JgHIHfQjHbmKvNzANPZWZ+tvJyw1nddaC5Ed/oBVQ72pipzlacxKi/y58A/3UvSOjXi47z69wu7qME6OjcHNQuUZlqna2eeJmptKz+Af/aA9eSi7X6+6RZ1rW0rdu3zd/xRTLodkNE3i72D9QWJzU5UkHC46Sx1/x9qsDTtcNlaALsoDFXnSINY08GR3Ml7ae45TrFuS5GuXXSPnJ3uUfXlaRb0K7rYueaNToHQJtAHOx46covzc7UytOsKoehoeXnK92sZ9jZ6rcQqel2agvUR+wydzDac06G2jgV4HGoXRK5gy0M0KWk/90ue9bvU4NJdblwBBEuacRH/SHfKSzX6indc+WXqrPPQ8lrM3U4qel0xPUE3Eps4x1amzbgEvWZdJ2qslbZhWauXK/MOeXdYg7gZPoCzieKfov7YTE0r+XacPaadqj6/KEZ/G+4Rf7c7mTVC/pIZda5wlYzKxJjCps4zHK9/lJtbtq5om3uJJhI+zFjp6ZV76Wef+TtdEtUZ6dqMJGpRscyn3EPQ3LnexwGswul80BamdU4MS5wBUWbbyR2/Vkvy7mb2zTumHXFRQ7uArfL7e2432jzvVJKO7vaAjeu4+DTEZlcF0du30iR+17GFBNNqtaPzJHQ2XvlfTF3hUx8cbzdY8qhucpBgL6+ubl24Nizx549f/68t7zBCuytnz327KlVlDXrq2cmksEJ+v0nEy57fG7tl+nvQ/nZuV+634ji8W9E+dnry4u/LP/6zV/9ZrraOPXmCfOSenn28KJVZzcr517eOP+Mmu5BCylOo3qEfs1KYkITBdezzUVSSPohdaRM1OFOordb7It2uQtaK2zTBrXaATavudVmykdnpw7NTzYyAeVj9k1X2xbQAQq31uVavmypn9PUTtdBDWPzPmG3wyckO5fgnJ+svQzf7RTrRnw7f7H2Attp/En+0iuVehJp3LXZ8ovV512MR0RIHbILBx+S6B46qhIba9nTlmOI/VSnx8ckdr8wD3L7HM35B5TyGpi+37zq9Vq7XkE+Mtuolmc6cpg2DXud8SZHwWiLIjiiDCIN+tXR6r/NHyxXZ1j/Owz2w6SNabreO64VI9kmdj2JMi2OAfdMElRnpysvP1NwhrjTV3i5ULnD3VLTXq1ZWfamuiNydxOfhjLnGBKns9Vq8LqV9GK91xGl90ZzUaOKoD/Z5Fr3kWbu70lo3snoS+IcfzDxrTppiLa4zYU7YW3poqSHv7/TrrJ+Up3qqAN/kF79AFV6Eu4HU/zkKvWkWvS0qE/KvgqyX/JylYkzC8unu68eopmT1Zpzg9zqth1l2mDV2YM1x2dXldgNOFtrwX5GCuLyjN9y592H7cz5Ua+Cc6cbWf0QRJwQ9zl3eb7E7XBJijlgriI7qsYBRW172kuVyXq1kcTOLTJeB8E+5MckWKkDeFqpVKZ+6QiyjWpjpuJCsEtDKKN4u5Xu8xEKZQDfdeafQHf0cCUVhAuMPVwNcelSD8K1zdWz24Kk9iD1HLFe4mo7EcUe99J/VODW3JwmPTecrpTTzztqxgwRXWs233c4Wwb8oxLmjBE+rT2tV8pzSOOmyrNTlaTcuZLUkFsdEDArEsxMo95ODb/kLXjMbYDdbt9LvPZe6hpomzrwuJp9unKwDFwtCZBtUQV3vwM2tyD1tP2YW/n/Pb7NHV6/LnB7+Jug5ZP4+oEe0ylFhdustNG8yjktd2Snvr2v9ZlEtGXm3AYz93vH0xTD0UlWkPp87eDBRH3J+BNRN8qTXYTwccWfKamlnrhtqOTsIyvorhOQRhUa2nWe8CET5n5bAx/67bDBsD487FEetjIN1oz+Jww7BTbquxxXqMX9XsGh3koPMKiATZkkASSbXG40ylOHDsOI6m7zyM6u0pFW8908dKoSU7Wjc6i+W6bmDrRahT01DGccqX5mcdCpGzwqF9g09yY1lCZeuYcxc0Yepeu0IK1+sph4o9Lyp6UqebjMMdUtzoS2Wu3cW6cQWfiRA1pS682Xp6e5+CPQT7i99H2m+Ur7fJn90LfZlWnwQfaAjvxA1xFd5zJTh8qzcOf7udJcpdI6uaMzqcxpjvsFDHcpOv73pb86eHcmm3hKeB/3OXPOybG9VVnSJHfMP1WbI++NDXShqn2Ukj3XfaqHKb0X7jxg6SB94BFLb2ztYjU9T2zfE9n3k8ShJLFDaov3J3ZFFy/+D3SIuDM=";
        PresentationPlayer.start(presInfo, "content", "playerView", onPlayerInit, savedPresentationState);
        function onPlayerInit(player)
        {
            (player);

            var preloader = document.getElementById("preloader");
            preloader.parentNode.removeChild(preloader);
        }
    }

    if (startup)
        startup(start);
    else
        start();
})();

document.querySelector('#button').addEventListener('click', myClick);


function myClick() {
    //console.log('work');
    // get input
    // input - value
    let a = document.querySelector('.input').value;
    // console.log(a);
    document.querySelector('.out').innerHTML += a;
};